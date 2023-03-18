import { UPLOAD_TEMPLATE_FAILED, UPLOAD_TEMPLATE_INITIATED, UPLOAD_TEMPLATE_SUCCESS } from "../actions/types"

const initialState = {
    uploading: null,
    templateName: null,
    uploaded: null,
    msg: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_TEMPLATE_INITIATED:
            return {
                uploading: true,
                templateName: null,
                uploaded: false,
                msg: ''
            }
        case UPLOAD_TEMPLATE_SUCCESS:
            return {
                uploading: false,
                templateName: action.payload,
                uploaded: true,
                msg: ''
            }
        case UPLOAD_TEMPLATE_FAILED:
            return {
                uploading: false,
                templateName: null,
                uploaded: false,
                msg: action.payload
            }
        default: return state
    }
}

export default reducer