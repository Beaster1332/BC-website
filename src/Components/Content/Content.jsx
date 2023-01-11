import React from "react";
import AboutMeContainer from "./ContentBlocks/AboutMe/AboutMeContainer.jsx";
import MyProjectsContainer from "./ContentBlocks/MyProjects/MyProjectsContainer.jsx";

const Content = (props) => {
    return <>
        <AboutMeContainer />
        <MyProjectsContainer />
    </>
}

export default Content;