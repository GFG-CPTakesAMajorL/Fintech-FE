import { LOAD_FILE_FAILED, LOAD_FILE_INITIATED, LOAD_FILE_SUCCESS } from "../actions/types"

const initialState = {
    loading: null,
    downloaded: null,
    buffer: null,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FILE_INITIATED:
            return {
                loading: true,
                buffer: null,
                downloaded: false,
                message: ''
            }
        case LOAD_FILE_SUCCESS:
            return {
                loading: false,
                buffer: action.payload,
                downloaded: true,
                message: ''
            }
        case LOAD_FILE_FAILED:
            return {
                loading: false,
                buffer: null,
                downloaded: false,
                message: action.payload
            }
        default: return state
    }
}

export default reducer