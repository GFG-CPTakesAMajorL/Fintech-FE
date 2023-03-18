import { SAVE_TO_POSTGRES_FAILED, SAVE_TO_POSTGRES_INITIATED, SAVE_TO_POSTGRES_SUCCESS } from "../actions/types"

const initialState = {
    processing: null,
    data: [],
    processed: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TO_POSTGRES_INITIATED:
            return {
                processing: true,
                data: [],
                processed: false
            }
        case SAVE_TO_POSTGRES_SUCCESS:
            return {
                processing: false,
                data: action.payload,
                processed: true
            }
        case SAVE_TO_POSTGRES_FAILED:
            return {
                processing: false,
                data: action.payload,
                processed: false
            }
        default: return state
    }
}

export default reducer