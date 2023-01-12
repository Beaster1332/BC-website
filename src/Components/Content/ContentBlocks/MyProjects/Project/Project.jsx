import React from "react";
import classes from './Project.module.css';

const Project = (props) => {

    const { name, desctiption, src, gitHub, img } = props;

    return <div className={classes.projectBlock}>
        <div className={classes.project}>
            <h4 className={classes.nameProject}>{name}</h4>
            <p className={classes.descriptionProject}>{desctiption}</p>
            <div className={classes.sourcesContainer}>
                <a className={classes.sourceProject} href={src} target="_blank" rel="noreferrer">Перейти на сайт</a>
                <a className={classes.gitHubSource} href={gitHub} target="_blank" rel="noreferrer">Репозиторий</a>
            </div>
        </div>
        <img className={classes.arrowImage} src="https://img.icons8.com/sf-regular/96/000000/chevron-right.png" alt="" />
        <div className={classes.projectImage}>
            <a className={classes.imageSrc} href={src} target="_blank" rel="noreferrer">
                <img className={classes.image} src={process.env.PUBLIC_URL + img} alt="" />
            </a>
        </div>
    </div>
}

export default Project;