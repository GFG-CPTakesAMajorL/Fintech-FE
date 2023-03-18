import {
    GET_BANK_NAMES_FAILED, GET_BANK_NAMES_INITIATED, GET_BANK_NAMES_SUCCESS, LOAD_INFO_FAILED, LOAD_INFO_INITIATED,
    LOAD_INFO_SUCCESS, RESET_RETRIEVE_JSON_SUCCESS, RETRIEVE_JSON_FAILED, RETRIEVE_JSON_INITIATED, RETRIEVE_JSON_SUCCESS
} from "../actions/types";

const initialState = {
    loading: null,
    info: [],
    loaded: null,
    retrieving: null,
    message: '',
    retrieved: null,
    loadingBanknames: null,
    banknames: [],
    loadedBanknames: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_INFO_INITIATED:
            return {
                ...state,
                loading: true,
                info: [],
                loaded: null
            }
        case LOAD_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload,
                loaded: true
            }
        case LOAD_INFO_FAILED:
            return {
                ...state,
                loading: false,
                info: [],
                loaded: false
            }
        case GET_BANK_NAMES_INITIATED:
            return {
                ...state,
                loadingBanknames: true,
                banknames: [],
                loadedBanknames: null
            }
        case GET_BANK_NAMES_SUCCESS:
            return {
                ...state,
                loadingBanknames: false,
                banknames: action.payload,
                loadedBanknames: true
            }
        case GET_BANK_NAMES_FAILED:
            return {
                ...state,
                loadingBanknames: false,
                banknames: [],
                loadedBanknames: false
            }
        case RETRIEVE_JSON_INITIATED:
            return {
                ...state,
                retrieving: true,
                message: '',
                retrieved: null
            }
        case RETRIEVE_JSON_SUCCESS:
            return {
                ...state,
                retrieving: false,
                message: action.payload,
                retrieved: true
            }
        case RETRIEVE_JSON_FAILED:
            return {
                ...state,
                retrieving: false,
                message: action.payload,
                retrieved: false
            }
        case RESET_RETRIEVE_JSON_SUCCESS:
            return {
                ...state,
                retrieving: null,
                message: '',
                retrieved: null
            }
        default: return state
    }
}

export default reducer;