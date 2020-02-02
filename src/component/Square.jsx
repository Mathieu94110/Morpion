import React, { Component } from "react";
import { Button } from "reactstrap";
import "../App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  check = () => {
    if (this.state.value == null) {
      this.setState({ value: this.props.player }, () => {
        this.props.changePlayer();
      });
    }
  };

  render() {
    return (
      <button className="square" onClick={this.check}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
