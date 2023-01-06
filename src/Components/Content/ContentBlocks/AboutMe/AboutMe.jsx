import React from "react";
import StackItem from "./StackItem/StackItem.jsx";
import classes from './AboutMe.module.css';

const AboutMe = (props) => {

    const { myInfo, photo } = props;

    const stackPhotoItems = photo.map(p => <StackItem key={p.name} {...p} />)

    return <div className={classes.aboutMeContainer}>
        <h1>Обо мне</h1>
        <div className={classes.content}>
            <div className={classes.infoBlock}>
                {myInfo}
            </div>
            <div className={classes.imageBlock}>
                {stackPhotoItems}
            </div>
        </div>
    </div>
}

export default AboutMe;