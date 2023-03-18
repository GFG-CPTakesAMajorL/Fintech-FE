import { UPLOAD_FILE_FAILED, UPLOAD_FILE_INITIATED, UPLOAD_FILE_SUCCESS } from "../actions/types"

const initialState = {
    uploading: null,
    filename: null,
    uploaded: null,
    msg: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_FILE_INITIATED:
            return {
                uploading: true,
                filename: null,
                uploaded: false,
                msg: ''
            }
        case UPLOAD_FILE_SUCCESS:
            return {
                uploading: false,
                filename: action.payload,
                uploaded: true,
                msg: ''
            }
        case UPLOAD_FILE_FAILED:
            return {
                uploading: false,
                filename: null,
                uploaded: false,
                msg: action.payload
            }
        default: return state
    }
}

export default reducer