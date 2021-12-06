import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createCaptcha } from "../actions/captchaActions";
import Header from "./layouts/Header";
import { message } from "antd";
import { Redirect } from "react-router";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      user: {},
      errors: {},
      username: "",
      email: "",
      password: "",
      captchaValue: "",
      redirect: false,
    };
  }

  componentDidMount() {
    this.props.createCaptcha();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.users) {
      this.setState({ user: nextProps.users.user });
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.captchaValue.length) {
      return message.info("Captcha value cannot be empty!");
    }
    if (this.state.captchaValue == this.props.user.answer) {
      message.success("Captcha Verified!");

      return this.setState({ redirect: true });
    } else {
      message.error("Invalid Captcha!");
      return this.props.createCaptcha();
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    var image = this.props.user.image;
    console.log("this.props.user.answer ", this.props.user.answer);
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <Header />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Sign Up</h3>

              <div className="form-group m-1 p-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  name="username"
                  id="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group m-1 p-1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group m-1 p-1">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group m-1 p-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter captcha"
                  name="captchaValue"
                  id="captchaValue"
                  value={this.state.captchaValue}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <div dangerouslySetInnerHTML={{ __html: image }} />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block ms-3 mt-2 "
              >
                Register
              </button>
              <p className="forgot-password text-right">
                Already registered <a href="/signin">sign in?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
SignUpComponent.propTypes = {
  createCaptcha: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  user: state.users.user,
});
export default connect(mapStateToProps, { createCaptcha })(SignUpComponent);
