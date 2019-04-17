import React, { Component } from "react";
class InputBox extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        onChange={this.props.onChange}
      />
    );
  }
}

class Login extends Component {
  render() {
    return (
      <form onSubmit={this.props.login}>
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
        <button type="submit">login</button>
      </form>
    );
  }
}
export default Login;
