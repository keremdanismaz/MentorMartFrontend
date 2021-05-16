import { combineReducers } from "redux";
import roleListReducer from "./roleListReducer";

const rootReducer = combineReducers({
    roleListReducer:roleListReducer,
});

export default rootReducer;