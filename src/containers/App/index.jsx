import React, { memo, useState, useEffect } from 'react';
import { history } from "../../utils/history";
import { Route, Router, Switch, } from "react-router-dom";
import Background from "../../components/Background";
import styles from './App.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import About from "../About";
import Element from "../../components/Element";
import list from '../../configs/list-config';
import ReactFullpage from "@fullpage/react-fullpage";
import Contacts from "../Contacts";
import contactsConfig from "../../configs/contacts-config";
import Project from "../Project";
import Slider from '../../components/Slider';

const App = memo(() => {

    const [fullpageApi, setFullpageApi] = useState();
    const [pageCount, setPageCount] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scroll(0, 0);
    });

    return (
        <div>
            <Router history={ history }>
                <Switch>
                </Switch>
            </Router>

            <div className={ styles.Wrapper }>
                <About />
                <Navigation fullpageApi={ fullpageApi } pageCount={ pageCount } currentPage={ currentPage } />
                <Header />
                <Background />
                <Slider>
                    { list.map((element, index) => {
                        if (index % 2 === 0) {
                            return (
                                <Element key={ index } index={ index } { ...element } />
                            )
                        }

                        return (
                            <Element right key={ index } index={ index } { ...element } />
                        )
                    }) }
                </Slider>
                <Contacts { ...contactsConfig } />
            </div>
        </div>
    )
});

export default App;