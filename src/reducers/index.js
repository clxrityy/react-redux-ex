import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { colorChange } from "./colors";


export const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    color: colorChange
});