import React, {memo} from 'react';
import {history} from "../../utils/history";
import {Route, Router, Switch, } from "react-router-dom";
import Project from "../../components/Project";
import Background from "../../components/Background";
//import ReactPageScroller from "react-page-scroller";
import styles from './App.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import About from "../About";

const App = memo(() => {

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/project/:id" component={Project} />
                </Switch>
            </Router>
            {/*<ReactPageScroller>*/}
                <Background />
                <div className={styles.Wrapper}>
                    <Header />
                    <Navigation />
                    <About />
                </div>
                {/*<div style={{width: '100%', height: '100%', display: 'flex'}}>*/}
                {/*    <Background />*/}
                {/*</div>*/}
            {/*</ReactPageScroller>*/}
        </div>
    );
});

export default App;