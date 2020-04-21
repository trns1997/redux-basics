import {
    FETCH_USERS_REQ,
    FETCH_USERS_SUC,
    FETCH_USERS_FAIL
} from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQ
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUC,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        let finalURL = "https://jsonplaceholder.typicode.com/users"
        fetch(finalURL)
            .then((res) => res.json())
            .then((data) => {
                const users = data
                dispatch(fetchUsersSuccess(users))
            })
            .catch((error) => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}