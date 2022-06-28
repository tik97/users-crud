import axios from "axios";

export async function fetcher(action = '', method, data = {}) {
    let API_URL = process.env.REACT_APP_BASE_URL

    let config = {
        method: method,
        url: API_URL + action,
        headers:  {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(data)
    };

    const response = await axios(config)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response;
        });

    return requestHandler(response)
}

export function requestHandler(response) {

    switch (response.status) {
        case 422:
            return response.json();
            break;

        case 401:
            return response;
            break;

        case 400:
            return response;
            break;

        case 200:
            return response.data
            break
    }

    return response

}
