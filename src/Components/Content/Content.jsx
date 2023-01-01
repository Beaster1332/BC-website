import React from "react";
import classes from './Content.module.css';
import AboutMe from "./ContentBlocks/AboutMe/AboutMe";

const Content = (props) => {

    const { myInfo,  } = props;

    return <div className={classes.contentContainer}>
        <AboutMe myInfo={myInfo}/>
    </div>
}

export default Content;