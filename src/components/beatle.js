import React, { Component } from "react";

import "../App.css";

class Beatle extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div className="App">
        {this.props.name}
        <button className="VoteButton" onClick={this.handleClick}>
          +
        </button>{" "}
        {this.props.votes}
      </div>
    );
  }
}

export default Beatle;
