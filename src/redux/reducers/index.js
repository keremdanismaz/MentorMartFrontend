import { combineReducers } from "redux";
import roleListReducer from "./roleListReducer";
import corporationListReducer from "./corporationListReducer";

const rootReducer = combineReducers({
    roleListReducer: roleListReducer,
    corporationListReducer: corporationListReducer,
});

export default rootReducer;