import React, { Component } from "react";
import { Button } from "reactstrap";


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Button>Cliquez</Button>
      </div>
    );
  }
}

export default Game;
