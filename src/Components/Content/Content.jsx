import React from "react";
import AboutMeContainer from "./ContentBlocks/AboutMe/AboutMeContainer.jsx";
import MyProjectsContainer from "./ContentBlocks/MyProjects/MyProjectsContainer.jsx";
import classes from './Content.module.css';

const Content = (props) => {

    return <div className={classes.contentContainer}>
        <AboutMeContainer />
        <MyProjectsContainer />
    </div>
}

export default Content;