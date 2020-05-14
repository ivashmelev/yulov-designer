import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import Root from "./Root";


ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
    , document.getElementById("root"));