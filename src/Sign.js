import React from 'react';
import './sign.css';

class Sign extends React.Component {

  state = {
    isSignedIn: false,
  }

  sayHi = () => {
    this.setState({greeting: 'Hello user'})
  }

  onLoad = () => {
    setTimeout(() => {
      this.setState({isSignedIn: true});
      }, 3000);
      this.sayHi();
    };
  

  render(){
    return (
    <div> {this.state.isSignedIn ? <span>{this.state.greeting}</span> : <button className="sign-button" onClick={this.onLoad}>Sign In</button>}</div>
    )
  }
}
export default Sign;
