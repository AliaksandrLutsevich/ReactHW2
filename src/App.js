import React from "react";
import "./App.css";
import names from "./names.json";

class App extends React.Component {
  state = {
    people: ["Nietzsche", "Goethe", "Descartes"],
  };

  onClick = () => {
    const randIndex = Math.floor(Math.random() * 13);
    const oneMoreName = names[randIndex];
    const newPeople = [...this.state.people, oneMoreName];
    this.setState({ people: newPeople });
  };

  render() {
    return (
      <>
        <button onClick={this.onClick}>Add Name</button>
        {this.state.people.map((name) => {
          return <h3>{name}</h3>;
        })}
      </>
    );
  }
}
export default App;
