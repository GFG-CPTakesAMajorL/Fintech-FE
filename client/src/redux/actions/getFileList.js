import FilesResource from "../resources/FilesResource";
import { GET_LIST_FAILED, GET_LIST_INITIATED, GET_LIST_SUCCESS } from "./types";

// LOAD FILES LIST FROM S3
export const getFiles = (token) => async (dispatch) => {
    dispatch({
        type: GET_LIST_INITIATED,
    });
    new FilesResource().loadFiles(token)
        .then(res => {
            return res.data
        })
        .then((data) => {
            dispatch({
                type: GET_LIST_SUCCESS,
                payload: data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_LIST_FAILED,
                payload: err.message,
            });
        });
};