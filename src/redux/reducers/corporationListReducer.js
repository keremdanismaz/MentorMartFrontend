import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function corporationListReducer(
    state = initialState.corporation,
    action
) {
    switch (action.type) {
        case actionTypes.GET_CORPORATIONS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
