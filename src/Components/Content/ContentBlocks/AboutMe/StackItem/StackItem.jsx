import React from "react";
import classes from './StackItem.module.css';

const StackItem = (props) => {

    const { name, image } = props;

    return <div className={classes.stackItem}>
        <img className={classes.stackItemImage} src={process.env.PUBLIC_URL + image} alt={name} />
        <h3 className={classes.stackItemName}>{name}</h3>
    </div>
}

export default StackItem;