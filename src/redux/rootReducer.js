import {combineReducers} from "redux";
import { likesReducer } from "./reducers/likesReducer";
import { inputReducer } from "./reducers/inputReducer";
import { commentReducer } from "./reducers/commentReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReduser = combineReducers({
    likesReducer,
    inputReducer,
    commentReducer,
    userReducer
});