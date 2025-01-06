import React, { Component } from "react";

class StateMinClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  eventChange = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.eventChange}>increment</button>
      </div>
    );
  }
}

export default StateMinClass;
