import React, {memo} from 'react';
import {history} from "../../utils/history";
import {Route, Router, Switch, } from "react-router-dom";
import Project from "../../components/Project";
import Background from "../../components/Background";
import styles from './App.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import About from "../About";
import Element from "../../components/Element";
import list from '../../list-config';
import ReactFullpage from "@fullpage/react-fullpage";

const App = memo(() => {

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/project/:id" component={Project} />
                </Switch>
            </Router>
            <Background />
            <div className={styles.Wrapper}>
                <Header />
                <Navigation />
                <About />
                <ReactFullpage.Wrapper>
                    {list.map((element, index) => {
                        if(index % 2 === 0) {
                            return <Element key={index} index={index} {...element} />
                        }

                        return <Element right key={index} index={index} {...element} />
                    } )}
                </ReactFullpage.Wrapper>
            </div>
        </div>
    );
});

export default App;