import axios from "axios";
import { URL_PREFIX } from "../../constants";
import { UPLOAD_TEMPLATE_FAILED, UPLOAD_TEMPLATE_INITIATED, UPLOAD_TEMPLATE_SUCCESS } from "./types";

// UPLOAD TEMPLATE FROM LOCAL MACHINE
export const templateUpload = (formData) => (dispatch) => {
    dispatch({
        type: UPLOAD_TEMPLATE_INITIATED,
    });
    axios.post(URL_PREFIX + "/upload/template", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then((res) => {
            dispatch({
                type: UPLOAD_TEMPLATE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: UPLOAD_TEMPLATE_FAILED,
                payload: err.message,
            });
        });
};
