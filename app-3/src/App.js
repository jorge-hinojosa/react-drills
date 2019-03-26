import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: ['tacos', 'enchiladas', 'nachos', 'quesadillas', 'sopes'],
      userInput: '',
    };
  }
  handleChange(val) {
    this.setState({userInput: val});
  }
  render() {
    let foodList = this.state.food
      .filter((e, i) => {
        return e.includes(this.state.userInput)
      }) 
      .map((e, i) => <h2>{e}</h2>)

    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event.target.value)} />
        {foodList}
      </div>
    );
  }
}

export default App;
