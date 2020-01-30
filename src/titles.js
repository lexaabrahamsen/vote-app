import React from "react";
import "./App.css";

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title">Weather App</h1>
        <p className="title-container__subtitle">
          Please enter a city and country to get started
        </p>
      </div>
    );
  }
}

export default Titles;
