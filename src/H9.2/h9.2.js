import React, { Component } from "react";
import './App.css'

class Inp extends Component {
  
  state = {
    value: '',
  }

 onChange = (event) => {
  this.setState ({value: event.target.value})
}

onClear = () => {
  this.setState ({value: ''})
}

  render() {

  return (
    <div className='login-form'>
      <input
        type="text"
        name="text"
        value = {this.state.value}
        placeholder="Enter your text"
        onChange={this.onChange}
      />
      <button onClick={this.onClear}>Clear</button>
      <div>{this.state.value}</div>
    </div>
  );
};
}
export default Inp;
