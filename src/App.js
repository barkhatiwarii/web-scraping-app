import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import DashboardComponent from "./components/DashboardComponent";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route path="/signin" component={LoginComponent} />
          <Route path="/signup" component={SignUpComponent} />
          <Route path="/dashboard" component={DashboardComponent} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
