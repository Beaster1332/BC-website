import React from "react";
import classes from './AboutMe.module.css';

const AboutMe = (props) => {

    const { myInfo, photo } = props;

    return <div className={classes.aboutMeContainer}>
        <h1>Обо мне</h1>
        <div className={classes.content}>
            <div className={classes.infoBlock}>
                {myInfo}
            </div>
            <div className={classes.imageBlock}>
                <img src={photo} alt="Фотография" />
            </div>
        </div>
    </div>
}

export default AboutMe;