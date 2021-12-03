import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import Header from "./layouts/Header";

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      isVerified: false,
      captchaValue: "",
      email: "",
      password: "",
    };
  }

  recaptchaLoaded() {
    console.log("capcha successfully loaded");
  }

  handleSubmit() {
    if (this.state.isVerified) {
      alert("You have successfully login!");
    } else {
      alert("Please verify captcha!");
      return;
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Sign In</h3>

              <div className="form-group m-2 p-1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group m-2 p-1">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group m-2 p-1">
                <Recaptcha
                  sitekey="6Lf7u28dAAAAALEKgfDKdixZi1hNaWQPiT-ZbQqm"
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                />
              </div>
              <button className="btn btn-primary btn-block m-1">Login</button>
              <p className="forgot-password text-right">
                Don't have an account <a href="/signup">sign up?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
