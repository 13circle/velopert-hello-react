import React, { Component, Fragment } from "react";
import "./App.css";

function boo(option, isSudo) {
  let isFrom = option == "--from";
  if (isFrom && isSudo) {
    return "Aaahhhhh~!!!!";
  }
  return "Nothing happened. Exit status 1.";
}

class App extends Component {
  render() {
    const sampleName = "React";
    const style = {
      backgroundColor: "#000000",
      color: "white",
      margin: "2vw",
      padding: "1vw",
      width: "fit-content",
    };
    const isRender = true;
    return (
      <Fragment>
        {/* This is a sample comment */}
        <div style={style}>
          <label className="test-className">Simple Text: </label>
          Hello, {sampleName}!
        </div>
        <div style={style}>
          <label>Input Text: </label>
          {isRender && <input type="text" placeholder="Sample Input 1" />}
          {(() => {
            // This is a sample comment
            if (!isRender) {
              return <input type="text" placeholder="Sample Input 2" />;
            }
          })()}
        </div>
        <div style={style}>
          <label>Programmar Meme Quote: </label>
          <br />
          <code>
            boo --from ghost <br />
            {boo("--form", false)} <br />
            sudo boo --from ghost <br />
            {boo("--from", true)} <br />
          </code>
        </div>
      </Fragment>
    );
  }
}

export default App;
