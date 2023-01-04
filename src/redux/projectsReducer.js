import { projects } from "./resources/projectsObj.js";

const initialState = {
    projects: [ ...projects ]
};

let projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default projectsReducer;