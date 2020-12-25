import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import App from './App';
const routing = (
    <Router>
 
        <Switch>
            <Route exact path="/" component ={App}/>
            <Route path="/home" component ={App}/>
        </Switch>

    </Router>
)
ReactDOM.render(
    routing,
    document.getElementById('root')
);