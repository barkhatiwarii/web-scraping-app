import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import DashboardComponent from "./components/DashboardComponent";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import CartDetails from "./components/CartDetails";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/dashboard" component={DashboardComponent} />
          <Route path="/verifyPayment" component={Cart} />
          <Route path="/payment" component={CartDetails} />
          <Route path="/verifyProfile" component={Profile} />
          <Route path="/profile" component={ProfileDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
