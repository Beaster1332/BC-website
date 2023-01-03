import { combineReducers, legacy_createStore as createStore } from "redux";
import aboutMeReducer from "./aboutMeReducer.js";
import projectsReducer from "./projectsReducer.js";

const reducers = combineReducers({
    aboutMeReducer,
    projectsReducer,
});

const store = createStore(reducers);

export default store;