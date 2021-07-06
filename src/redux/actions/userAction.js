import * as actionTypes from "./actionTypes"

export function getUserSuccess(users) {
    return { type: actionTypes.GET_USER_SUCCESS, payload: users };
}


export function getUser(MentorId) {
    return function (dispatch) {
        //https://localhost:44385/User?mentorId=2
        let url = "https://localhost:44385/User?mentorId="+MentorId;
        return fetch(url)
            .then((response) => response.json())
            .then((result) => dispatch(getUserSuccess(result)));
    };
}

