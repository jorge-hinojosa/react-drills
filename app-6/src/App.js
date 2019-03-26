import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskInput: '',
      taskList: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(val) {
    this.setState({taskInput: val});
  }
  handleClick() {
    this.setState({
      taskList: [...this.state.taskList, this.state.taskInput],
      taskInput: '' });
  }
  render() {
    let list = this.state.taskList.map((element, index) => {
      return <Todo key={index} task={element} />
    });
    
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input 
            value={this.state.taskInput}
            placeholder='Enter New Task Here'
            onChange={(event) => this.handleChange(event.target.value)}/> 
          <button 
            onClick={() => this.handleClick(this.state.taskInput)}>Add</button>
        </div>

        <br/>
        {list}
      </div>
    );
  }
}

export default App;
