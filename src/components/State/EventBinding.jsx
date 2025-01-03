import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    HandleClick(){
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count} </h1>
                <button onClick={this.HandleClick.bind(this)}>increase</button>
                
            </div>
            //bind used when arrow function not used
        );
    }
}

export default EventBinding;