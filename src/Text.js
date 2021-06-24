import React from 'react';
import './Text.css';

class ChangedText extends React.Component {
  
  state = {
    italic: false,
  }

  changeBtn = () => {this.setState({ italic: !this.state.italic })}

  render() {
    return (
        <p className={this.state.italic === true ? 'italic-font' : null} onClick={this.changeBtn}>Hello, welcome to Italy! Oh sorry, welcome to italic font style. @Belavia</p>
    )
  }
}

export default ChangedText;