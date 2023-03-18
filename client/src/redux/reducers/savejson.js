import { RESET_SAVE_JSON_SUCCESS, SAVE_JSON_FAILED, SAVE_JSON_INITIATED, SAVE_JSON_SUCCESS } from "../actions/types"

const initialState = {
    saving: null,
    saved: null,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_JSON_INITIATED:
            return {
                saving: true,
                saved: false,
                message: ''
            }
        case SAVE_JSON_SUCCESS:
            return {
                saving: false,
                saved: true,
                message: action.payload
            }
        case SAVE_JSON_FAILED:
            return {
                saving: false,
                saved: false,
                message: action.payload
            }
        case RESET_SAVE_JSON_SUCCESS:
            return {
                saving: null,
                saved: null,
                message: ''
            }
        default: return state
    }
}

export default reducer