import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
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
    let name = this.state.username;
    let password = this.state.password;
    fetch("/addUser", {
      method: "POST",
      body: JSON.stringify({ name, password })
    })
      .then(res => res.json())
      .then(output => {
        if (output.status) {
          document.getElementById("login").style.display = "none";
          document.getElementById("home").style.display = "unset";
        }
        document.getElementById("msg").innerHTML = "Invalid user";
      });
  }

  render() {
    return (
      <div className="App">
        <div id="login">
          <div id="msg" />
          <Login
            login={this.login.bind(this)}
            getUsername={this.getUsername.bind(this)}
            getPassword={this.getPassword.bind(this)}
          />
        </div>
        <div id="home" style={{ display: "none" }}>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
