import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.clickBox = this.clickBox.bind(this);
  }

  clickBox(evt) {
    this.props.clickBox(this.props.color, this.props.index);
  }
  render() {
    let style = {
      backgroundColor: this.props.color,
    };
    return <div onClick={this.clickBox} className="Box" style={style}></div>;
  }
}

export default Box;
