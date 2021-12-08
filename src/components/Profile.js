import React, { Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { message } from "antd";
import { Redirect } from "react-router";
import HeaderUser from "./layouts/HeaderUser";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      redirect: false,
    };
  }
  componentDidMount() {
    loadCaptchaEnginge(6);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      this.setState({ redirect: true });
      message.success("Captcha Matched");
      // loadCaptchaEnginge(6);
      // document.getElementById("user_captcha_input").value = "";
    } else {
      message.error("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  render() {
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
            <h3>To view profile! verify that you're a human</h3>
            <div>
              <div className=" form-group col mt-3">
                <input
                  placeholder="Enter Username"
                  id="username"
                  name="username"
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className=" form-group col mt-3">
                <input
                  placeholder="Enter Captcha"
                  id="user_captcha_input"
                  name="user_captcha_input"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col mt-3">
                <LoadCanvasTemplate />
              </div>

              <div className="col mt-3">
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => this.doSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
