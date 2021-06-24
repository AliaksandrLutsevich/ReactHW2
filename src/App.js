import React from 'react';

class App extends React.Component {
  
  state = {
    count: 1,
    zeroIndicatior: 'not zero'
  }

  onButton = (x) => {
    this.setState({ count: this.state.count + x})
  }

  onReset = () => {
    this.setState({ count: 0, zeroIndicatior: 'zero'})
  }

  render() {
    return (
      <div>
        <button onClick={()=> this.onButton(-1)}>-</button>
        {this.state.count}
        <button onClick={()=> this.onButton(+1)}>+</button>
        {this.state.zeroIndicatior}
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}

export default App;