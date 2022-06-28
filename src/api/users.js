import {fetcher} from './request'

export const getUsersRequest = () => {
    return fetcher('/contact/', "GET")
}

export const getSingleUserRequest = id => {
    return fetcher(`/contact/${id}/`, "GET")
}

export const createUserRequest = data => {
    return fetcher('/contact/', "POST", data)
}

export const removeUserRequest = id => {
    return fetcher(`/contact/${id}/`, "DELETE")
}
