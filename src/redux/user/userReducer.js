import { FETCH_USERS_SUC, FETCH_USERS_REQ, FETCH_USERS_FAIL } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQ:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUC:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAIL:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default: return state
    }
}

export default userReducer