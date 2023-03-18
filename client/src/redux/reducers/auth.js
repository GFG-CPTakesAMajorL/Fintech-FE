import {
    LOGIN_USER_FALIED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS,
    LOGOUT_USER_FALIED,
    LOGOUT_USER_SUCCESS,
    SIGNUP_USER_FALIED, SIGNUP_USER_INITIATED, SIGNUP_USER_SUCCESS
} from "../actions/types"

const initialState = {
    user: {},
    token: localStorage.getItem('token'),
    isSignupInitiated: null,
    isSignupSuccessful: null,
    isLoginInitiated: null,
    isLoginSuccessful: null,
    isAuthenticated: null,
    isLogoutInitiated: null,
    isLogoutSuccessful: null,
    msg: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_INITIATED:
            return {
                ...state,
                isSignupInitiated: true,
                user: {},
                isSignupSuccessful: false,
                isAuthenticated: false
            }
        case SIGNUP_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isSignupInitiated: false,
                user: action.payload.user,
                token: action.payload.token,
                isSignupSuccessful: true,
                isAuthenticated: true
            }
        case SIGNUP_USER_FALIED:
            return {
                ...state,
                isSignupInitiated: false,
                user: {},
                isSignupSuccessful: false,
                isAuthenticated: false,
                msg: action.payload
            }

        case LOGIN_USER_INITIATED:
            return {
                ...state,
                isLoginInitiated: true,
                user: {},
                isLoginSuccessful: false,
                isAuthenticated: false,
                msg: ''
            }
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isLoginInitiated: false,
                user: action.payload.user,
                isLoginSuccessful: true,
                isAuthenticated: true,
                token: action.payload.token
            }
        case LOGIN_USER_FALIED:
            return {
                ...state,
                isLoginInitiated: false,
                user: {},
                isLoginSuccessful: false,
                isAuthenticated: false,
                msg: action.payload
            }
        case LOGIN_USER_INITIATED:
            return {
                ...state,
                isLogoutInitiated: true,
            }
        case LOGOUT_USER_SUCCESS:
            localStorage.removeItem('token');
            return {
                isLogoutInitiated: false,
                isLogoutSuccessful: true,
                user: {},
                token: null,
                isAuthenticated: false,
                msg: ''
            }
        case LOGOUT_USER_FALIED:
            return {
                ...state,
                isLogoutInitiated: false,
                isLogoutSuccessful: false
            }
        default: return state
    }
}

export default reducer;