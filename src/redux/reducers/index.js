import {combineReducers} from "redux";
import app from "./app";

const allReducers = combineReducers({
    main: app,
});

export default allReducers;