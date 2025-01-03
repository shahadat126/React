import  React, { Component } from "react";

class EventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: ''
    };
  }
  handlechange = (e) => {
    this.setState({ changedValue: e.target.value },()=>{
      console.log(this.state.changedValue)
    });
    
    
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handlechange} />
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}

export default EventHandler;
