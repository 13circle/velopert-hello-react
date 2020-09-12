import React, { Component } from "react";

class MyName extends Component {
  static defaultProps = {
    name: "서벌짱",
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다!
      </div>
    );
  }
}

/*
MyName.defaultProps = {
  name: "서벌짱",
}
*/

export default MyName;
