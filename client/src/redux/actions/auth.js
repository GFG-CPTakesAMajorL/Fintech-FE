import AuthResource from "../resources/AuthResource"
import {
    LOGIN_USER_FALIED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS,
    LOGOUT_USER_FALIED,
    LOGOUT_USER_INITIATED, LOGOUT_USER_SUCCESS, SIGNUP_USER_FALIED, SIGNUP_USER_INITIATED, SIGNUP_USER_SUCCESS
} from "./types"

export const signupUser = (username, email, password, cb) => dispatch => {
    dispatch({
        type: SIGNUP_USER_INITIATED
    })
    new AuthResource().signup(username, email, password)
        .then(res => {
            dispatch({
                type: SIGNUP_USER_SUCCESS,
                payload: res.data
            })
            cb();
        })
        .catch(err => {
            dispatch({
                type: SIGNUP_USER_FALIED,
                payload: err.message
            })
        })
}

export const loginUser = (username, password, cb) => dispatch => {
    dispatch({
        type: LOGIN_USER_INITIATED
    })
    new AuthResource().login(username, password)
        .then(res => {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: res.data
            })
            cb();
        })
        .catch(err => {
            dispatch({
                type: LOGIN_USER_FALIED,
                payload: err.message
            })
        })
}

export const logoutUser = (token) => dispatch => {
    dispatch({
        type: LOGOUT_USER_INITIATED
    })
    new AuthResource().logout(token)
        .then(() => {
            dispatch({
                type: LOGOUT_USER_SUCCESS
            });
        })
        .catch(err => {
            dispatch({
                type: LOGOUT_USER_FALIED,
                payload: err.message
            });
        });
}