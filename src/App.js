import React, { Component } from "react";
import "./App.css";
import Beatle from "./components/beatle";

const list = [
  {
    id: 1,
    name: "John Lennon",
    votes: 0
  },
  {
    id: 2,
    name: "Paul McCartney",
    votes: 0
  },
  {
    id: 3,
    name: "George Harrison",
    votes: 0
  },
  {
    id: 4,
    name: "Ringo Starr",
    votes: 0
  }
];

class App extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    this.setState({ members: list });
  }

  handleEvent = memberId => {
    const updatedList = this.state.members.map(member => {
      if (member.id === memberId) {
        return Object.assign({}, member, {
          votes: member.votes + 1
        });
      } else {
        return member;
      }
    });

    this.setState({
      members: updatedList
    });
  };

  render() {
    return this.state.members.map(member => (
      <div>
        <div className="card">
          <Beatle
            key={member.id}
            id={member.id}
            name={member.name}
            votes={member.votes}
            onVote={this.handleEvent}
          />
        </div>
      </div>
    ));
  }
}

export default App;
