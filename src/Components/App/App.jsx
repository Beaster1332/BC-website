import React from 'react';
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <Header />
        <div className={classes.mainAppContent}>
            <Content />
        </div>
    </div>
}

export default App;
