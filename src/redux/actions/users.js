import {createUserRequest, getSingleUserRequest, getUsersRequest, removeUserRequest} from "../../api/users";
import {
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS,
    GET_SINGLE_USER_SUCCESS,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS,
    REMOVE_USER_SUCCESS
} from "./actionTypes";

export const getUsers = () => dispatch => {
    return getUsersRequest()
        .then(res => {
            if (res) {
                dispatch({type: GET_USERS_SUCCESS, payload: res})
            }
        })
        .catch(err => {
            dispatch({type: GET_USERS_ERROR, payload: err})
        })
}

export const removeUserData = () => dispatch => {
    dispatch({type: GET_SINGLE_USER_SUCCESS, payload: null})
}

export const getSingleUser = id => dispatch => {
    return getSingleUserRequest(id)
        .then(res => {
            if (res) {
                dispatch({type: GET_SINGLE_USER_SUCCESS, payload: res})
            }
        })
        .catch(err => {
            console.log(err.response.data);
        })
}

export const removeUser = (id, index) => (dispatch, getState) => {
    return removeUserRequest(id)
        .then(() => {
            if (index) {
                const buffData = [...getState().users.users];
                buffData.splice(index, 1)
                dispatch({type: GET_USERS_SUCCESS, payload: buffData})
            }
            dispatch({type: REMOVE_USER_SUCCESS})
        })
}

export const createUser = data => dispatch => {
    return createUserRequest(data)
        .then(res => {
            if (res.status === 400) {
                dispatch({type: CREATE_USER_ERROR, payload: res.data})

                setTimeout(() => {
                    dispatch({type: CREATE_USER_ERROR, payload: null})
                }, 4000)
            } else {
                dispatch({type: CREATE_USER_SUCCESS})
            }
        })
}
