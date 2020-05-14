import React, {memo} from 'react';
import {history} from "../../utils/history";
import {Route, Router, Switch, } from "react-router-dom";
import Project from "../../components/Project";
import Background from "../../components/Background";

const App = memo(() => {

    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/project/:id" component={Project} />
                </Switch>
            </Router>
            <Background />
        </>
    );
});

export default App;