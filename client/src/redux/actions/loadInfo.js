import FilesResource from "../resources/FilesResource"
import {
    GET_BANK_NAMES_FAILED, GET_BANK_NAMES_INITIATED, GET_BANK_NAMES_SUCCESS, LOAD_INFO_FAILED, LOAD_INFO_INITIATED,
    LOAD_INFO_SUCCESS, RESET_RETRIEVE_JSON_SUCCESS, RETRIEVE_JSON_FAILED, RETRIEVE_JSON_INITIATED, RETRIEVE_JSON_SUCCESS
} from "./types"

// LOAD SIZE & DATE FOR EACH FILE
export const loadInfo = (token, filename) => async dispatch => {
    dispatch({
        type: LOAD_INFO_INITIATED
    })
    new FilesResource().loadFileInfo(token, filename)
        .then(res => {
            dispatch({
                type: LOAD_INFO_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOAD_INFO_FAILED,
                payload: err.message
            })
        })
}

export const retrieveJson = (token, bankname, isRotationRequired) => async dispatch => {
    dispatch({
        type: RETRIEVE_JSON_INITIATED
    })
    new FilesResource().retriveBankJson(token, bankname, isRotationRequired)
        .then(res => {
            dispatch({
                type: RETRIEVE_JSON_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: RETRIEVE_JSON_FAILED,
                payload: {
                    "response": "no stencil for this bank"
                }
            })
        })
}

export const resetRetrieveJson = () => dispatch => {
    dispatch({
        type: RESET_RETRIEVE_JSON_SUCCESS
    })
}

export const getBankNames = () => async dispatch => {
    dispatch({
        type: GET_BANK_NAMES_INITIATED
    })
    new FilesResource().loadBankNames()
        .then(res => {
            dispatch({
                type: GET_BANK_NAMES_SUCCESS,
                payload: res.data.banknames
            })
        })
        .catch(err => {
            dispatch({
                type: GET_BANK_NAMES_FAILED,
                payload: err.message
            })
        })
}