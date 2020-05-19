import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom';
import App from './containers/App';
import {history} from "./utils/history";
import Project from "./containers/Project";
import projects from "./configs/projects-config";

const Root = () => {
    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={withRouter(App)} />
                    {/*<Route exact path="*" component={withRouter(App)} />*/}
                    <Route exact path="/project/:id">
                        <Project config={projects} />
                    </Route>

                </Switch>
            </Router>
        </>
    )
}

export default Root;