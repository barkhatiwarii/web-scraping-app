import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderUser from "./layouts/HeaderUser";
import { Result, Button } from "antd";

export default class CartDetails extends Component {
  render() {
    return (
      <div>
        <HeaderUser />

        <div className="payment-card w-50 ">
          <Result
            status="success"
            title="Successfully Purchased Item!"
            subTitle="Order number: 2017182818828182881."
            extra={[
              <Button type="primary" key="console">
                <NavLink to="/dashboard">Home</NavLink>
              </Button>,
              ,
            ]}
          />
        </div>
      </div>
    );
  }
}
