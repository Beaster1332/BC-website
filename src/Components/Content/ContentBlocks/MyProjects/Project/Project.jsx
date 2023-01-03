import React from "react";
import classes from './Project.module.css';

const Project = (props) => {

    const { name, desctiption, src } = props;

    return <div className={classes.project}>
        <h4 className={classes.nameProject}>{name}</h4>
        <p className={classes.descriptionProject}>{desctiption}</p>
        <a className={classes.sourceProject} href={src} target="_blank" rel="noreferrer">Перейти на сайт</a>
    </div>
}

export default Project;