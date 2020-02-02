import React, { Component } from "react";
import { Button, Col, Row } from "reactstrap";
import Square from "./Square";
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: "X" };
  }
  findWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  };
  changePlayer = () => {
    if (this.state.player == "X") {
      this.setState({ player: "O" });
    } else this.setState({ player: "X" });
  };

  renderSquare(i) {
    //la fonction que je vais créer doit etre dans ma classe

    return (
      <Square
        changePlayer={this.changePlayer}
        value={i}
        player={this.state.player}
      />
    );
  }
  0;

  render() {
    let allSquares = squares.map(square => {
      return <Col sm={4}>{this.renderSquare(square)}</Col>;
    });
    return (
      <div style={{ width: "120px" }}>
        <Row>{allSquares}</Row>
      </div>
    );
  }
}

export default Board;
