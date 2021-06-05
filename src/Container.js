import React, { Component } from "react";
import Box from "./Box";
import { getColor } from "./Helpers";

class Container extends Component {
  static defaultProps = {
    colors: [
      "red",
      "green",
      "blue",
      "yellow",
      "black",
      "grey",
      "tomato",
      "cyan",
    ],
  };

  constructor(props) {
    super(props);
  }

  fillColor() {
    return getColor(this.props.colors);
  }

  render() {
    let boxes = [];

    for (let i = 0; i < this.props.maxBox; i++) {
      boxes.push(
        <Box key={i} color={this.fillColor()} colors={this.props.colors} />
      );
    }
    return <div>{boxes}</div>;
  }
}

export default Container;
