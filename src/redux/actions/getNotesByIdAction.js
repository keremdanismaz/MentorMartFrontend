import * as actionTypes from "./actionTypes"

export function getNoteByIdSuccess(notes) {
    return { type: actionTypes.GET_NOTES_BY_ID, payload: notes };
}


export function getNoteById(NoteId) {
    return function (dispatch) {
        //https://localhost:44385/GetUserById?userId=40
        let url = "https://localhost:44385/GetNoteById?Id="+NoteId;
        return fetch(url)
            .then((response) => response.json())
            .then((result) => dispatch(getNoteByIdSuccess(result)));
    };
}
