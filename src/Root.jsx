import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom';
import App from './containers/App';
import {history} from "./utils/history";

const Root = () => {
    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={withRouter(App)} />
                    <Route exact path="*" component={withRouter(App)} />
                </Switch>
            </Router>
        </>
    )
}

export default Root