import React, { Component } from "react";
import InputBox from "./InputBox";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>BLOGGER</div>
        <div className="container">
          <div>
            Title:
            <InputBox
              type="text"
              name="blog_title"
              onChange={this.props.title}
              placeholder="Enter title here.."
            />
          </div>
          <div>
            Content:
            <div
              onInput={this.props.content}
              className="blog-content"
              contentEditable="true"
              placeholder="Enter content here.."
              onFocus={this.props.content}
            />
          </div>
          <button
            className="save-button"
            type="submit"
            onClick={this.props.save}
          >
            save
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
