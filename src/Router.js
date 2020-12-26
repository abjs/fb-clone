import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import App from './App';
export default function Router() {
    <div>
        <Router>
            <Switch>
                <StatePrivider initialState={initialState} reducer={reducer}>
                    <Route exact path="/" component={App} />
                </StatePrivider>
            </Switch>
        </Router>
    </div>

}
