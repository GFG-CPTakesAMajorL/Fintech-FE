import FilesResource from "../resources/FilesResource"
import { LOAD_FILE_FAILED, LOAD_FILE_INITIATED, LOAD_FILE_SUCCESS } from "./types"

// LOAD SINGLE FILE FROM S3 FOR EXTRACT
export const readFile = (token, filename) => dispatch => {
    dispatch({
        type: LOAD_FILE_INITIATED
    })
    new FilesResource().readFile(token, filename)
        .then(res => {
            const file = res.data.data.slice(2, -1)
            dispatch({
                type: LOAD_FILE_SUCCESS,
                payload: file
            })
        })
        .catch((err) => {
            dispatch({
                type: LOAD_FILE_FAILED,
                payload: err.message
            })
        })
}