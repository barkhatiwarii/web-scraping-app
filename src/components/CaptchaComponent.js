import Captcha from "captcha-image";
import React, { Component } from "react";

export default class CaptchaComponent extends Component {
  constructor(props) {
    super(props);
    const captchaImage = new Captcha(
      "35px Arial",
      "center",
      "middle",
      300,
      150,
      "#eee",
      "#111",
      6
    );
    this.state = {
      captchaObj: captchaImage,
    };
    this.createMarkup = this.createMarkup.bind(this);
  }
  createMarkup(source) {
    return { __html: source };
  }
  render() {
    const captchaImage = this.state.captchaObj.createImage();
    console.log("hi-from", captchaImage);
    return (
      <div className="App">
        <div dangerouslySetInnerHTML={this.createMarkup(captchaImage)} />
      </div>
    );
  }
}
