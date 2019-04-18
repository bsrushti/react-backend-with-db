import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.getUsername = this.getUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getContent = this.getContent.bind(this);
    this.save = this.save.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      username: "",
      password: "",
      title: "",
      content: ""
    };
  }

  getUsername(e) {
    this.setState({ username: e.target.value });
  }

  getPassword(e) {
    this.setState({ password: e.target.value });
  }

  getTitle(e) {
    this.setState({ title: e.target.value });
  }

  getContent(e) {
    this.setState({ content: e.target.innerText });
  }

  login(e) {
    e.preventDefault();
    let name = this.state.username;
    let password = this.state.password;
    fetch("/login", {
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

  save(e) {
    e.preventDefault();
    let userName = this.state.username;
    let blogTitle = this.state.title;
    let content = this.state.content;
    console.log("coming to save \n", userName, blogTitle, content);
    fetch("/addPost", {
      method: "POST",
      body: JSON.stringify({ userName, blogTitle, content })
    });
    console.log(this.state.title, this.state.content);
  }

  render() {
    return (
      <div>
        <div id="login" className="login-page">
          <div id="msg" className="err-msg" />
          <Login
            login={this.login}
            getUsername={this.getUsername}
            getPassword={this.getPassword}
          />
        </div>
        <div id="home" className="home-page" style={{ display: "none" }}>
          <Home
            save={this.save}
            title={this.getTitle}
            content={this.getContent}
          />
        </div>
      </div>
    );
  }
}

export default App;
