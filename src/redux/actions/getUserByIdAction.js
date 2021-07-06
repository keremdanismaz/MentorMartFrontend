import * as actionTypes from "./actionTypes"

export function getUserByIdSuccess(users) {
    return { type: actionTypes.GET_USER_BY_ID, payload: users };
}


export function getUserById(UserId) {
    return function (dispatch) {
        //https://localhost:44385/GetUserById?userId=40
        let url = "https://localhost:44385/GetUserById?userId="+UserId;
        return fetch(url)
            .then((response) => response.json())
            .then((result) => dispatch(getUserByIdSuccess(result)));
    };
}
