import React, { Component } from "react";
import HeaderUser from "./layouts/HeaderUser";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createCaptcha } from "../actions/captchaActions";
import { Redirect } from "react-router";
import { message } from "antd";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {},
      captcha: "",
      address: "",
      captchaValue: "",
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
    if (this.state.captchaValue === this.props.user.answer) {
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
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/payment" />;
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
              <h3>To buy! verify that you're a human</h3>
              <div className="form-group m-2 p-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  id="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group m-2 p-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Captcha"
                  name="captchaValue"
                  id="captchaValue"
                  value={this.state.captchaValue}
                  onChange={this.onChange}
                />
              </div>

              <div className="">
                <div dangerouslySetInnerHTML={{ __html: image }} />
              </div>
              <button className="btn btn-success btn-block mt-3 ms-3">
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Cart.propTypes = {
  createCaptcha: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  user: state.users.user,
});
export default connect(mapStateToProps, { createCaptcha })(Cart);
