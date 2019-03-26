import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: ['burgers', 'pizza', 'wings', 'pasta', 'hot dogs'],
    }
  }

  render() {
    let foodList = this.state.food.map((e) => <h2>{e}</h2>);
    return (
      <div className="App">
        {foodList}
      </div>
    );
  }
}

export default App;
