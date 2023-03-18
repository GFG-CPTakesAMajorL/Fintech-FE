import { GET_LIST_FAILED, GET_LIST_INITIATED, GET_LIST_SUCCESS } from "../actions/types"

const initialState = {
    loading: null,
    files: [],
    err: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_INITIATED:
            return {
                loading: true,
                files: [],
                err: ''
            }
        case GET_LIST_SUCCESS:
            return {
                loading: false,
                files: action.payload,
                err: ''
            }
        case GET_LIST_FAILED:
            return {
                loading: false,
                files: [],
                err: action.payload
            }
        default: return state
    }
}

export default reducer