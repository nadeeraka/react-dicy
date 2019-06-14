import React, { Component } from "react";
import uuid from "uuid";
import angular from "../pawns/angular-pawn.png";
import js from "../pawns/js-pawn.png";
import react from "../pawns/react-pawn.png";
import vue from "../pawns/vue-pawn.png";

class SelectPlayer extends Component {
  state = {
    pawn: [js, react, angular, vue],
    player: 1
  };

  selectBatch() {
    const batch = Math.floor(Math.random() * this.state.pawn.length);
    const nb = this.state.pawn[batch];

    return batch;
  }

  render() {
    return (
      <div>
        <p>Player {this.state.player} play</p>

        {this.state.pawn.map(res => (
          <img src={res} className="pawn" alt="" />
        ))}
      </div>
    );
  }
}
export default SelectPlayer;
