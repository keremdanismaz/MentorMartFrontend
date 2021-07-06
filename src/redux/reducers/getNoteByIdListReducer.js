import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function getUserByIdListReducer(
    state = initialState.getNoteById,
    action
) {
    switch (action.type) {
        case actionTypes.GET_NOTES_BY_ID:
            return action.payload;
        default:
            return state;
    }
}
