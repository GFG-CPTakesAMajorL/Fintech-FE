import PostgresResource from "../resources/PostgresResource"
import { SAVE_TO_POSTGRES_FAILED, SAVE_TO_POSTGRES_INITIATED, SAVE_TO_POSTGRES_SUCCESS } from "./types"

export const processData = (token, filename, bankname, height, width, isRotationRequired) => dispatch => {
    dispatch({
        type: SAVE_TO_POSTGRES_INITIATED
    })
    new PostgresResource().process(token, filename, bankname, height, width, isRotationRequired)
        .then(res => {
            dispatch({
                type: SAVE_TO_POSTGRES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SAVE_TO_POSTGRES_FAILED,
                payload: { "response": "This functionality is not available right now! Try again later!" }
            })
        })
}