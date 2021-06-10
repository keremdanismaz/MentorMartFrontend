import * as actionTypes from "./actionTypes"

export function getCorporationSuccess(corporation) {
    return { type: actionTypes.GET_CORPORATIONS_SUCCESS, payload: corporation };
}

export function getCorporation() {
    return function (dispatch) {
        let url = "https://localhost:44385/Corporation";
        return fetch(url)
            .then((response) => response.json())
            .then((result) => dispatch(getCorporationSuccess(result)));
    };
}