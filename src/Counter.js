import React, { Component } from "react";

const containerStyle = {
  height: "60vh",
  display: "flex",
  alignItems: "center",
};

const subContainerStyle = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};

const btnStyle = {
  padding: "0.3em",
  textAlign: "center",
  width: "2em",
  margin: "0.5em",
  fontSize: "20pt",
  cursor: "pointer",
};

const Problematic = () => {
  throw new Error("Error DAISUKI!");
  return <div></div>;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.state = {
      number: 0,
      error: false,
    };
    console.log("constructor");
  }

  /*
  state = {
    number: 0,
  }
  */

  componentWillMount() {
    console.log("componentWillMount (deprecated)");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Abort re-rendering if the state "number" is
    // a multiple of 5.
    console.log("shouldComponentUpdate");
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(prevProps, prevState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
  }

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
    if (this.state.error) return <h1>Error at line 12: "Error DAISUKI!"</h1>;
    return (
      <div style={containerStyle}>
        <div style={subContainerStyle}>
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
          {this.state.number === 4 && <Problematic />}
          <div style={{width: "fit-content"}}>
            <button onClick={this.handleIncrease} style={btnStyle}>
              +
            </button>
            <button onClick={this.handleDecrease} style={btnStyle}>
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
