import * as actionTypes from "./actionTypes"

export function getNotesSuccess(notes) {
    return { type: actionTypes.GET_NOTES_SUCCESS, payload: notes };
}

export function getNotes() {
    return function (dispatch) {
        let url = "https://localhost:44385/GetNote";
        return fetch(url)
            .then((response) => response.json())
            .then((result) => dispatch(getNotesSuccess(result)));
    };
}