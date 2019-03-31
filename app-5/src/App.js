import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}/>
      </div>
    );
  }
}

export default App;
