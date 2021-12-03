import React, { Component } from "react";
import HeaderUser from "./layouts/HeaderUser";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createCaptcha } from "../actions/captchaActions";
import CaptchaComponent from "./CaptchaComponent";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      captcha: "",
      captchaValue: "",
    };
  }
  componentDidMount() {
    this.props.createCaptcha();
  }
  render() {
    var image = this.props.user.image;
    var t = image;
    console.log(image);
    if (image) {
      let l = image.length;
      t = image.substring(5, l - 6);
      console.log(t);
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
            <form>
              <h3>To buy! verify that you're a human</h3>

              <div className="form-group m-2 p-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Captcha"
                  name="captcha"
                  id="captcha"
                  // value={this.state.email}
                  // onChange={this.onChange}
                />
              </div>

              <div className="ms-3">
                <CaptchaComponent />
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
