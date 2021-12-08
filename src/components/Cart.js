import React, { Component } from "react";
import HeaderUser from "./layouts/HeaderUser";
import { Redirect } from "react-router";
import { message } from "antd";
import { Link } from "react-router-dom";
import { Vertify } from "@alex_xu/react-slider-vertify";

const style = {
  display: "inline-block",
  marginRight: "20px",
  marginBottom: "20px",
  width: "100px",
  padding: "5px 20px",
  color: "#fff",
  textAlign: "center",
  cursor: "pointer",
  background: "#1991FA",
};
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      sliderSuccess: false,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.sliderSuccess == false) {
      return message.info("Verify Captcha!");
    }
    if (this.state.sliderSuccess == true) {
      return this.setState({ redirect: true });
    }
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
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
                  placeholder="Enter Delivery Address"
                  name="address"
                  id="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  required
                />
              </div>
              {/**<div className="form-group m-2 p-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Captcha"
                  name="captchaValue"
                  id="captchaValue"
                  value={this.state.captchaValue}
                  onChange={this.onChange}
                />
              </div> */}
              <Vertify
                style={style}
                width={320}
                height={160}
                // visible={visible}
                onSuccess={() => {
                  this.setState({ sliderSuccess: true });
                  message.success("Captcha Verified!");
                }}
                onFail={() => {
                  this.setState({ sliderSuccess: false });
                  message.error("Captcha Failed!");
                }}
                onRefresh={() => message.info("Refreshed!")}
              />
              {/**<div className="">
                <div dangerouslySetInnerHTML={{ __html: image }} />
    </div>*/}
              <button className="btn btn-success btn-block mt-3 ms-3">
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
