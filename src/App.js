import React, { Component, Fragment } from "react";
import MyName from "./MyName";
import MyNameFunc from "./MyNameFunctional";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <MyName name="리무루 템페스트" />
          <MyName />
          <MyNameFunc name="사이타마" />
        </div>
        <Counter />
      </Fragment>
    );
  }
}

export default App;
