import { CHECK_PROCESSED_FAILED, CHECK_PROCESSED_INITIATED, CHECK_PROCESSED_SUCCESS, EXTRACT_FAILED, EXTRACT_INITIATED, EXTRACT_SUCCESS } from "../actions/types"

const initialState = {
    extracting: null,
    data: [],
    extracted: null,
    checkProcessedInitiated: null,
    is_processed: null,
    checkProcessedSuccessful: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EXTRACT_INITIATED:
            return {
                checkProcessedInitiated: null,
                is_processed: null,
                checkProcessedSuccessful: null,
                extracting: true,
                data: [],
                extracted: false
            }
        case EXTRACT_SUCCESS:
            return {
                ...state,
                extracting: false,
                data: action.payload,
                extracted: true
            }
        case EXTRACT_FAILED:
            return {
                ...state,
                extracting: false,
                data: action.payload,
                extracted: false
            }
        case CHECK_PROCESSED_INITIATED:
            return {
                ...state,
                checkProcessedInitiated: true,
            }
        case CHECK_PROCESSED_SUCCESS:
            return {
                checkProcessedInitiated: false,
                is_processed: action.payload,
                checkProcessedSuccessful: true,
            }
        case CHECK_PROCESSED_FAILED:
            return {
                checkProcessedInitiated: false,
                is_processed: null,
                checkProcessedSuccessful: false,
            }
        default: return state
    }
}

export default reducer