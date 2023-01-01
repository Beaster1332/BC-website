import React from "react";
import classes from './AboutMe.module.css';

const AboutMe = (props) => {

    const { myInfo } = props;

    return <div className={classes.aboutMeContainer}>
        {myInfo}
    </div>
}

export default AboutMe;