import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {formReducer} from "./formReducer";


export const rootReducer = combineReducers({
    posts: postsReducer,
    form: formReducer,

})