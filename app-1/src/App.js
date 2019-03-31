import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      meassage: ""

    }
  }

handaleChange(val) {
  this.setState({meassage:val})
}

render(){
  return (
    <div className="App">
      <input type="text" onChange={e => this.handaleChange(e.target.value)}></input>
      <p> {this.state.meassage} </p>
    </div>
  )
}
}



export default App;
