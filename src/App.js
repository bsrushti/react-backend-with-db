import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import PostView from "./PostView";
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
    this.view = this.view.bind(this);
    this.state = {
      username: "",
      password: "",
      title: "",
      content: "",
      blogDetails: "",
      currentPage: "login"
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
    let app = this;
    let name = this.state.username;
    let password = this.state.password;
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ name, password })
    })
      .then(res => res.json())
      .then(function(output) {
        if (!output.status) {
          document.getElementById("msg").innerHTML = "Invalid user";
        } else app.setState({ currentPage: "home" });
      });
  }

  save(e) {
    e.preventDefault();
    let userName = this.state.username;
    let blogTitle = this.state.title;
    let content = this.state.content;
    fetch("/addPost", {
      method: "POST",
      body: JSON.stringify({ userName, blogTitle, content })
    });
    this.setState({ currentPage: "home" });
  }

  view(e) {
    e.preventDefault();
    let app = this;
    let userName = this.state.username;
    let blogTitle = this.state.title;
    fetch("/viewPost", {
      method: "POST",
      body: JSON.stringify({ userName, blogTitle })
    })
      .then(res => res.json())
      .then(out => {
        app.setState({ currentPage: "view", blogDetails: out.body });
      });
  }

  renderLogin() {
    return (
      <div id="login" className="login-page">
        <div id="msg" className="err-msg" />
        <Login
          login={this.login}
          getUsername={this.getUsername}
          getPassword={this.getPassword}
        />
      </div>
    );
  }

  renderHome() {
    return (
      <div id="home" className="home-page">
        <Home
          save={this.save}
          view={this.view}
          title={this.getTitle}
          content={this.getContent}
        />
      </div>
    );
  }

  renderPost(blogDetails) {
    return (
      <div>
        <PostView blogDetails={blogDetails} />
      </div>
    );
  }

  render() {
    return (
      <div className="blogger-container">
        <Blogger
          currentPage={this.state.currentPage}
          renderLogin={this.renderLogin.bind(this)}
          renderHome={this.renderHome.bind(this)}
          renderPost={this.renderPost.bind(this)}
          blogDetails={this.state.blogDetails}
        />
      </div>
    );
  }
}

const Blogger = function(props) {
  if (props.currentPage == "login") return <div>{props.renderLogin()}</div>;
  if (props.currentPage == "home") return <div>{props.renderHome()}</div>;
  if (props.currentPage == "view")
    return <div>{props.renderPost(props.blogDetails)}</div>;
};

export default App;
