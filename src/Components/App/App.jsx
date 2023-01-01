import React from 'react';
import Header from '../Header/Header.jsx';
import ContentContainer from '../Content/ContentContainer.jsx';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <Header />
        <div className={classes.mainAppContent}>
            <ContentContainer />
        </div>
    </div>
}

export default App;
