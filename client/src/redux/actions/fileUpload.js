import axios from "axios";
import { URL_PREFIX } from "../../constants";

import {
    UPLOAD_FILE_FAILED,
    UPLOAD_FILE_INITIATED,
    UPLOAD_FILE_SUCCESS,
} from "./types";

// UPLOAD FILE FROM LOCAL MACHINE
export const fileUpload = (formData) => (dispatch) => {
    dispatch({
        type: UPLOAD_FILE_INITIATED,
    });
    axios.post(URL_PREFIX + "/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then((res) => {
            dispatch({
                type: UPLOAD_FILE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: UPLOAD_FILE_FAILED,
                payload: err.message,
            });
        });
};
