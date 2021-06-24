import React from 'react';

class PlayerButton extends React.Component {
  
  state = {
    player: 'repeat off'
  }

  onChange = () => {
    if (this.state.player === 'repeat off'){
        this.setState({player: 'repeat on'})
    } else if (this.state.player === 'repeat on'){
        this.setState({player: 'repeat one'})
    } else if (this.state.player === 'repeat one'){
        this.setState({player: 'repeat off'})
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onChange}>{this.state.player}</button>
      </div>
    )
  }
}

export default PlayerButton;