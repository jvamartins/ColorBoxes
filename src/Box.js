import React, { Component } from "react";
import "./Box.css";
import { getColor } from "./Helpers";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }

  handleBoxClick(e) {
    this.boxClick();
  }

  boxClick() {
    let randomColor = getColor(this.props.colors);
    while (randomColor === this.state.color) {
      randomColor = getColor(this.props.colors);
    }
    this.setState({
      color: randomColor,
    });
  }

  render() {
    let style = {
      backgroundColor: this.state.color ? this.state.color : this.props.color,
    };
    return (
      <div onClick={this.handleBoxClick} className="Box" style={style}></div>
    );
  }
}

export default Box;
