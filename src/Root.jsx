import React from 'react';
import { Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import App from './containers/App';
import { history } from "./utils/history";
import Project from "./containers/Project";
import projects from "./configs/projects-config";

const Root = () => {
    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={withRouter(App)} />
                    {/*<Route exact path="*" component={withRouter(App)} />*/}
                    <Route exact path="/projects/:id">
                        <Project config={projects} />
                    </Route>
                    <Route path="/">
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Root;