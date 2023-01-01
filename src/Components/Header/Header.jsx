import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.headerContainer}>
            <div>
                <h1 className={classes.h1}>Самойленко Иван</h1>
            </div>
            <div>
                <h1 className={classes.h1}>Начинающий Frontend-разработчик</h1>
            </div>
        </div>
    </header>
}

export default Header;