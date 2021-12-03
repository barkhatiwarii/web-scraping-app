import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import {createCaptcha}from "../actions/captchaActions"
import CaptchaComponent from "./CaptchaComponent";
class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {},
          errors: {},
        };
      }
    componentDidMount(){
        this.props.createCaptcha()
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps,"hiiiii")
        if(nextProps.users){
            this.setState({ user: nextProps.users.user });

        }
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    render() {
        var image = this.props.user.image
        var t=image
        console.log(image)
        if (image){
        let l=image.length;
        t=image.substring(5,l-6)
        console.log(t)
        }

        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group m-1 p-1">
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group m-1 p-1">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group m-1 p-1">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div>
                <div dangerouslySetInnerHTML={{ __html: image }} />
                {/* < CaptchaComponent/> */}
                </div>
                <div className="form-group m-1 p-1">
                <input type="text" className="form-control" placeholder="Enter captcha"
                name="captchaValue"
                id="captchaValue"
                value={this.state.captchaValue}
                onChange={this.onChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block m-1 p-1">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
            </form>
        );
    }
}
SignUpComponent.propTypes = {
    createCaptcha: PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    errors: state.errors,
    user: state.users.user
  });
  export default connect(mapStateToProps, { createCaptcha })(SignUpComponent);
