import { Component } from "react";
class Card extends Component {
  render(){
    return <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.title}</h1>
    </div>
    
    
  }
}

export default Card;
