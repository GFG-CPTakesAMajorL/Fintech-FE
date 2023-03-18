import SaveJsonResource from "../resources/SaveJsonResource";
import {
    RESET_SAVE_JSON_SUCCESS,
    SAVE_JSON_FAILED,
    SAVE_JSON_INITIATED,
    SAVE_JSON_SUCCESS,
} from "./types";

// SAVE JSON CONFIG FILE TO MONGODB
export const savejson = (token, bankName, data) => (dispatch) => {
    dispatch({
        type: SAVE_JSON_INITIATED,
    });
    new SaveJsonResource().saveJson(token, bankName, data)
        .then((res) => {
            dispatch({
                type: SAVE_JSON_SUCCESS,
                payload: res.data.msg,
            });
        })
        .catch((err) => {
            dispatch({
                type: SAVE_JSON_FAILED,
                payload: err.message,
            });
        });
};

export const resetSaveJson = () => (dispatch) => {
    dispatch({
        type: RESET_SAVE_JSON_SUCCESS
    })
}