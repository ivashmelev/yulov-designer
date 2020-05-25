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
import './App.scss'
import CreatedBy from '../../components/CreatedBy';

const App = memo(() => {

    const [fullpageApi, setFullpageApi] = useState();
    const [pageCount, setPageCount] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const tooltips = ['Начало', 'Обо мне'];
    list.forEach(el => tooltips.push(el.title));
    tooltips.push('Контакты');

    return (
        <div>
            <Router history={ history }>
                <Switch>
                </Switch>
            </Router>

            <div className={ styles.Wrapper }>
                <Navigation targets={ [] } />
                <Header />
                <Background />
                <About />
                <div>
                    { list.map((element, index) => {
                        if (index % 2 === 0) {
                            return (

                                <Element index={ index } { ...element } />
                            )
                        }

                        return (
                            <Element right index={ index } { ...element } />
                        )
                    }) }
                </div>
                <Contacts { ...contactsConfig } />
            </div>
            <CreatedBy />
        </div>
    )
});

export default App;