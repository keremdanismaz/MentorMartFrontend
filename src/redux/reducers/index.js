import { combineReducers } from "redux";
import roleListReducer from "./roleListReducer";
import corporationListReducer from "./corporationListReducer";
import userListReducer from "./userListReducer";
import noteListReducer from "./noteListReducer";
import getUserByIdListReducer from "./getUserByIdListReducer";

const rootReducer = combineReducers({
    roleListReducer,
    corporationListReducer,
    userListReducer,
    noteListReducer,
    getUserByIdListReducer,
});

export default rootReducer;