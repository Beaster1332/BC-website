import { aboutMe } from "./resources/aboutMeObj.js";

const initialState = {
    ...aboutMe,
}

let aboutMeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default aboutMeReducer;