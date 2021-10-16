import React, { createContext, useEffect, useReducer } from 'react';
import { authReducer } from './authReducer';

//* Define information
export interface AuthState {
    name: string;
    isLogged: boolean;
};

//* Initial State
export const authInitialState: AuthState = {
    name: '',
    isLogged: false,
};

const init = () => {
    const user = localStorage.getItem('user');
    if (user === null || user === undefined) {
        return { name: '', isLogged: false }
    } else {
        return JSON.parse(user);
    }
};

//* Definition and what must export my context
export interface AuthContextProps {
    authState: AuthState;
    signIn: (name: string) => void;
    logOut: () => void;
};

//* Create context
export const AuthContext = createContext({} as AuthContextProps);

//* Component that provide my state
export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState, init);

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(authState));
    }, [authState])

    const signIn = (name: string) => {
        dispatch({
            type: '[auth] login',
            payload: name,
        })
    }

    const logOut = () => {
        dispatch({
            type: '[auth] logout'
        })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
