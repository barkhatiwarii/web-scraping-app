import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from "./yash-logo-new.svg";
import { Provider } from "react-redux";
import { store} from "./store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import DashboardComponent from './components/DashboardComponent';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/signin"}><img src={logo} alt="Logo" width="80" height="50" />
</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/signin"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

          <Switch>
            <Route exact path='/' component={LoginComponent} />
            <Route path="/signin" component={LoginComponent} />
            <Route path="/signup" component={SignUpComponent} />
            <Route path="/dashboard" component={DashboardComponent} />

          </Switch>
    
    </div></Router>
    </Provider>
  );
}

export default App;