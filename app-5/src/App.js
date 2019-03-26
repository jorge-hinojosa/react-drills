import React, { Component } from "react";
import "./App.css";
import "./Image"
import Image from "./Image";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgSrc: 'https://www.aspca.org/sites/default/files/meow-for-now_053118_shelters-near-you_main.png'
    }
  }

  render() {
    return (
      <div className="App">
        <Image src={this.state.imgSrc}/>
      </div>
    );
  }
}

export default App;
