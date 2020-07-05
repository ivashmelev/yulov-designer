import React, { memo } from 'react';
import { Router, Switch } from "react-router-dom";
import { history } from "../../utils/history";
import Background from "../../components/Background";
import styles from './App.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import About from "../About";
import Element from "../../components/Element";
import list from '../../configs/list-config';
import Contacts from "../Contacts";
import contactsConfig from "../../configs/contacts-config";
import './App.scss';
import CreatedBy from '../../components/CreatedBy';
import ButtonTop from '../../components/ButtonTop';

const App = memo(() => {

    const tooltips = ['Начало', 'Обо мне'];
    list.forEach(el => tooltips.push(el.title));
    tooltips.push('Контакты');

    return (
        <div>
            <Router history={history}>
                <Switch />
            </Router>

            <Background />
            <div className={styles.Wrapper}>
                <Navigation targets={[]} />
                <Header />
                <About />
                <div>
                    { list.map((element, index) => {
                        if (index % 2 === 0) {
                            return (
                                <Element key={index} index={index} {...element} />
                            );
                        }

                        return (
                            <Element right key={index} index={index} {...element} />
                        );
                    }) }
                </div>
                <div id="contacts" />
                <Contacts {...contactsConfig} />
            </div>
            <CreatedBy />
        </div>
    );
});

export default App;