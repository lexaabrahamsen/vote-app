import React, { Component } from "react";

import "../App.css";

class Beatle extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div className="title-container__title">
        {this.props.name}
        <div>
          <button className="VoteButton" onClick={this.handleClick}>
            +
          </button>{" "}
          <div>{this.props.votes}</div>
        </div>
      </div>
    );
  }
}

export default Beatle;
