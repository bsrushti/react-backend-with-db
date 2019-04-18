import React, { Component } from "react";
class InputBox extends Component {
  render() {
    return (
      <input
        className="input-box"
        type={this.props.type}
        name={this.props.name}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
export default InputBox;
