import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  getUsername(e) {
    this.setState({ username: e.target.value });
  }

  getPassword(e) {
    this.setState({ password: e.target.value });
  }

  login(e) {
    e.preventDefault();
    let msg = "Invalid user";
    let name = this.state.username;
    let password = this.state.password;
    fetch("/addUser", {
      method: "POST",
      body: JSON.stringify({ name, password })
    })
      .then(res => res.json())
      .then(output => {
        if (output.status) msg = "Valid User";
        document.getElementById("msg").innerText = msg;
      });
  }

  render() {
    return (
      <div className="App">
        <div id="msg" />
        <Login
          login={this.login.bind(this)}
          getUsername={this.getUsername.bind(this)}
          getPassword={this.getPassword.bind(this)}
        />
      </div>
    );
  }
}

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

export default App;
