import { combineReducers, legacy_createStore as createStore } from "redux";
import aboutMeReducer from "./aboutMeReducer";

const reducers = combineReducers({
    aboutMeReducer,
});

const store = createStore(reducers);

export default store;