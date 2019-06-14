import React, { Component } from "react";

class SelectPlayer extends Component {
  state = {
    pawn: ["javascript", "react", "angular", "vue"],
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
        <h1>Playar components</h1>
        <p>
          Player {this.state.player} use {this.selectBatch()}{" "}
        </p>
      </div>
    );
  }
}
export default SelectPlayer;
