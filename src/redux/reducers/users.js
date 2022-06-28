import {
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS,
    GET_SINGLE_USER_ERROR,
    GET_SINGLE_USER_SUCCESS,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS, REMOVE_USER_SUCCESS
} from "../actions/actionTypes";

export const initialState = {
    users: null,
    user: null,
    errors: null,
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }
        case GET_SINGLE_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            }
        }
        case GET_SINGLE_USER_ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }
        case REMOVE_USER_SUCCESS: {
            return {
                ...state
            }
        }
        case CREATE_USER_SUCCESS: {
            return {
                ...state
            }
        }
        case CREATE_USER_ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default: {
            return state
        }
    }
}

