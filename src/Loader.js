import React from 'react';
import './loader.css';

class Loader extends React.Component {

  state = {
    loading: false,
    greeting: null,
  }

  sayHi = () => {
    this.setState({loading: false})
    this.setState({greeting: 'Hello'})
  }

  onLoad = () => {
    setTimeout(() => {
        this.sayHi();
      }, 3000);
      this.setState({loading: true});
    };
  

  render(){
    return (
    <div>
        <button className="greeting-button" onClick={this.onLoad}>Say Hi</button>
        {this.state.loading && <div className="loader"></div>}
        {this.state.greeting && <span>{this.state.greeting}</span>}
    </div>
    )
  }
}
export default Loader;
