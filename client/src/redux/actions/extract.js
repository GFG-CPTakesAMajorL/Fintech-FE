import ExtractResource from "../resources/ExtractResource"
import { CHECK_PROCESSED_FAILED, CHECK_PROCESSED_INITIATED, CHECK_PROCESSED_SUCCESS, EXTRACT_FAILED, EXTRACT_INITIATED, EXTRACT_SUCCESS } from "./types"

// EXTRACT DATA 
export const extractData = (token, filename, bankname, heightOfPDF, widthOfPDF, isRotationRequired) => async dispatch => {
    dispatch({
        type: EXTRACT_INITIATED
    })
    new ExtractResource().extract(token, filename, bankname, heightOfPDF, widthOfPDF, isRotationRequired)
        .then(res => {
            dispatch({
                type: EXTRACT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: EXTRACT_FAILED,
                payload: { "response": "Cropping is not done properly. Try Again!" }
            })
        })
}

// CHECK IF PROCESSED
export const checkIsProcessed = (token, filename) => async dispatch => {
    dispatch({
        type: CHECK_PROCESSED_INITIATED
    })
    new ExtractResource().isProcessed(token, filename)
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: CHECK_PROCESSED_SUCCESS,
                payload: data.data
            })
        })
        .catch(err => {
            dispatch({
                type: CHECK_PROCESSED_FAILED
            })
        })
}