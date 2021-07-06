import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function userListReducer(
    state = initialState.users,
    action
) {
    switch (action.type) {
        case actionTypes.GET_USER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
