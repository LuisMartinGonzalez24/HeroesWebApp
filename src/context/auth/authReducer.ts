import { AuthState } from "./AuthContext";

type AuthReducerTypes =
    | { type: '[auth] login' }
    | { type: '[auth] logout' }

const authReducer = (state: AuthState, action: AuthReducerTypes): AuthState => {
    switch (action.type) {
        case '[auth] login':
            return {
                name: 'Luis Gonzalez',
                isLogged: true,
            };

        case '[auth] logout':
            return {
                ...state,
                isLogged: false,
            };

        default:
            return state;
    }
};

export { authReducer };
