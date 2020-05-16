import React, {memo, useState} from 'react';
import {history} from "../../utils/history";
import {Route, Router, Switch, } from "react-router-dom";
import Project from "../../components/Project";
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

const App = memo(() => {

    const [fullpageApi, setFullpageApi] = useState();
    const [pageCount, setPageCount] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/project/:id" component={Project} />
                </Switch>
            </Router>

            <div className={styles.Wrapper}>
                <Header />
                <Navigation fullpageApi={fullpageApi} pageCount={pageCount} currentPage={currentPage}/>
                <ReactFullpage
                    scrollOverflow
                    afterLoad={(origin, destination) => setCurrentPage(destination.index)}
                    scrollOverflowOptions={{
                        scrollbars: false,
                    }}

                    render={({state, fullpageApi}) => {
                        setFullpageApi(fullpageApi);
                        setPageCount(state.sectionCount);

                        return (
                            <div>
                                <div className={`section`}>
                                    <a name={'about'} />
                                    <Background />
                                    <About />
                                </div>
                                {list.map((element, index) => {
                                    if (index % 2 === 0) {
                                        return (
                                            <div className={'section'} key={index}>
                                                <a name={'portfolio'}/>
                                                <Element  index={index} {...element} />
                                            </div>
                                        )
                                    }

                                    return (
                                        <div className={'section'} key={index}>
                                            <a name={'portfolio'}/>
                                            <Element right index={index} {...element} />
                                        </div>
                                    )
                                })}
                                <div className={'section'}>
                                    <a name='contacts'/>
                                    <Contacts {...contactsConfig} />
                                </div>
                            </div>
                        )
                    }}
                />
            </div>
    </div>)
});

export default App;