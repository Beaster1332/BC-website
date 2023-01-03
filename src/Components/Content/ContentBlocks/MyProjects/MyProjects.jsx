import React from "react";
import Project from './Project/Project.jsx';
import classes from './MyProjects.module.css';

const MyProjects = (props) => {

    const { projects } = props;

    const projectsItems = projects.map(p => <Project key={p.name} {...p} />)

    return <div className={classes.projectsContainer}>
        <h1>Мои проекты</h1>
        <div className={classes.projects}>
            {projectsItems}
        </div>
    </div>
}

export default MyProjects;