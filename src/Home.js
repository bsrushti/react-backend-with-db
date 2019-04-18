import React from "react";
import InputBox from "./InputBox";

const Home = function(props) {
  return (
    <div>
      <div>BLOGGER</div>
      <div className="container">
        <div>
          Title:
          <InputBox
            type="text"
            name="blog_title"
            onChange={props.title}
            placeholder="Enter title here.."
          />
        </div>
        <div>
          Content:
          <div
            onInput={props.content}
            className="blog-content"
            contentEditable="true"
            placeholder="Enter content here.."
            onFocus={props.content}
          />
        </div>
        <button className="save-button" onClick={props.save}>
          save
        </button>
        <button className="save-button" onClick={props.view}>
          view
        </button>
      </div>
    </div>
  );
};

export default Home;
