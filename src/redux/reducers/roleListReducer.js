import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function roleListReducer(
    state = initialState.roles,
    action
) {
    switch (action.type) {
        case actionTypes.GET_ROLES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
