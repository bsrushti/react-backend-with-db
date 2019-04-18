import React, { Component } from "react";
import InputBox from "./InputBox";
class Login extends Component {
  render() {
    return (
      <form className="login-page" onSubmit={this.props.login}>
        <div>
          username :
          <InputBox
            type="text"
            name="username"
            onChange={this.props.getUsername}
          />
        </div>
        <div>
          password :
          <InputBox
            type="password"
            name="password"
            onChange={this.props.getPassword}
          />
        </div>
        <button type="submit" className="login-button">
          login
        </button>
      </form>
    );
  }
}
export default Login;
