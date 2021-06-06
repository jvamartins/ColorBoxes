import React, { Component } from "react";
import Box from "./Box";
import { getColor } from "./Helpers";

class Container extends Component {
  static defaultProps = {
    maxBox: 5,
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
    this.state = {
      boxes: this.fillBoxes(),
    };
    this.clickBox = this.clickBox.bind(this);
  }

  fillBoxes() {
    let filledBoxes = [];
    for (let i = 0; i < this.props.maxBox; i++) {
      let color = this.fillColor();
      filledBoxes.push(color);
    }
    return filledBoxes;
  }

  fillColor() {
    return getColor(this.props.colors);
  }

  clickBox(currentColor, index) {
    let randomColor = getColor(this.props.colors);
    while (randomColor === currentColor) {
      randomColor = getColor(this.props.colors);
    }
    let newBoxes = this.state.boxes.map((box, i) => {
      if (index === i) {
        return randomColor;
      }
      return box;
    });
    this.setState({
      boxes: newBoxes,
    });
  }

  render() {
    return (
      <div>
        {this.state.boxes.map((b, i) => (
          <Box key={i} index={i} color={b} clickBox={this.clickBox} />
        ))}
      </div>
    );
  }
}

export default Container;
