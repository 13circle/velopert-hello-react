import React, { Component } from "react";

const btnStyle = {
  padding: "0.5vw",
  width: "5vw",
  marginRight: "1vw",
  fontSize: "20pt",
  cursor: "pointer",
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.state = {
      number: 0,
    };
  }

  /*
  state = {
    number: 0,
  }
  */

  handleIncrease() {
    /*
    this.setState({
      number: this.state.number + 1,
    });
    */
    const { number } = this.state;
    this.setState({
      number: number + 1,
    });
  }

  handleDecrease() {
    /*
    this.setState({
      number: this.state.number - 1,
    });
    */
    this.setState(({ number }) => ({
      number: number - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>Value: {this.state.number}</div>
        {/**
         * << CAUTION >>
         * While setting an event prop, pass a function
         * reference value only, not calling a function.
         * Otherwise, it will cause infinite re-rendering
         * with the following routine:
         * Rendering -> Call function -> setState
         * -> Re-rendering -> Call function -> ...
         * Thus, DO NOT CALL YOUR METHODS OR FUNCTIONS
         * WHILE SETTING AN EVENT.
         */}
        <button onClick={this.handleIncrease} style={btnStyle}>+</button>
        <button onClick={this.handleDecrease} style={btnStyle}>-</button>
      </div>
    );
  }
}

export default Counter;
