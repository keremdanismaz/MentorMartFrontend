import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function noteListReducer(
    state = initialState.notes,
    action
) {
    switch (action.type) {
        case actionTypes.GET_NOTES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
