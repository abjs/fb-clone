import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "./components/Login/helpers/Provider.js";
import reducer, { initialState } from "./components/Login/helpers/reducer";
const routing = (
  <Provider initialState={initialState} reducer={reducer}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={App} />
      </Switch>
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
