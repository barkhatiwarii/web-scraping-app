import React, { Component } from "react";
import HeaderUser from "./layouts/HeaderUser";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createTextCaptcha } from "../actions/captchaActions";
import { message } from "antd";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      errors: {},
      username: "",
      captcha: "",
      captchaValue: "",
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.createTextCaptcha();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "Profile");
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
    console.log("Profile 2", this.state.user);
    if (this.state.captchaValue == this.props.user.answer) {
      message.success("Captcha Verified!");
      return this.setState({ redirect: true });
    } else {
      message.error("Invalid Captcha!");
      return this.props.createTextCaptcha();
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    var image = this.props.user.image;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <HeaderUser />
        <div>
          <button className="btn btn-secondary btn-block mt-3 ms-5 rounded-circle">
            <Link to="/dashboard">
              <i
                className="fa fa-arrow-left text-white "
                aria-hidden="true"
              ></i>
            </Link>
          </button>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>To view profile! verify that you're a human</h3>
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
                  type="text"
                  className="form-control"
                  placeholder="Enter captcha"
                  name="captchaValue"
                  id="captchaValue"
                  value={this.state.captchaValue}
                  onChange={this.onChange}
                />
              </div>
              <div className="ms-2 me-2 border border-dark">
                <div
                  className="ps-3"
                  dangerouslySetInnerHTML={{ __html: image }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success btn-block mt-3 ms-2"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  createTextCaptcha: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  user: state.users.user,
});
export default connect(mapStateToProps, { createTextCaptcha })(Profile);
