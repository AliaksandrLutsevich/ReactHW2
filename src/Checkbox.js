import React from 'react';

class Checkbox extends React.Component {
  
  state = {
    icon: 'X'
  }

  onChange = () => {
    if (this.state.icon == 'X'){
        this.setState({icon: 'V'})
    } else {
        this.setState({icon: 'X'})
    }

  }

  render() {
    return (
      <div>
        <button onClick={this.onChange}>{this.state.icon}</button>
      </div>
    )
  }
}

export default Checkbox;