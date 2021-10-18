import { AuthState } from "./AuthContext";

type AuthReducerTypes =
    | { type: '[auth] login', payload: string }
    | { type: '[auth] logout' }

const authReducer = (state: AuthState, action: AuthReducerTypes): AuthState => {
    switch (action.type) {
        case '[auth] login':
            return {
                name: action.payload,
                isLogged: true,
            };

        case '[auth] logout':
            return {
                name: '',
                isLogged: false,
            };

        default:
            return state;
    }
};

export { authReducer };
