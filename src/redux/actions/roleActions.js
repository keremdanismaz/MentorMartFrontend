import * as actionTypes from "./actionTypes"

export function getRolesSuccess(roles) {
    console.log(roles)
    return { type: actionTypes.GET_ROLES_SUCCESS, payload: roles };
}

export function getRoles() {
    return function (dispatch) {
        let url = "https://localhost:44385/Role";
        return fetch(url , { mode: 'no-cors'})
            .then((response) => response.json())
            .then((result) => dispatch(getRolesSuccess(result)));
    };
}