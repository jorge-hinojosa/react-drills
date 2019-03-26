import React, {Component} from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  updateUserName(val) {
    this.setState({userName: val});
  }
  updatePassword(val) {
    this.setState({password: val});
  }
  handleOnClick() {
    alert('Username: ' + this.state.userName + ' || Password: '  + this.state.password);
  }
  render() {
    return (
      <div>
        <span>Username:</span>
        <input onChange={(event) => this.updateUserName(event.target.value)}/>
      
        <span>Password:</span>
        <input onChange={(event) => this.updatePassword(event.target.value)}/>
        <button onClick={() => this.handleOnClick(this.state.userName, this.state.password)}>Login</button>
      </div>
    )
  }
}

export default Login;