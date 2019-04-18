import React from "react";
import "./PostView.css";
const PostView = function(props) {
  let { title, content, created_at, user_name } = props.blogDetails[0];
  return (
    <div className="container">
      <div className="App">
        <header>
          <div className="title">{title}</div>
        </header>
        <div className="timestamp">{created_at.split("T")[0]}</div>
        <div className="content">{content}</div>
        <div className="blogger-name">{user_name}</div>
      </div>
      <div className="side-panel" />
    </div>
  );
};

export default PostView;
