import React from "react";
import "./App.css";
import names from "./names.json";
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    people: [{name: "Nietzsche", id: uuidv4()}, {name: "Goethe", id: uuidv4()}, {name: "Descartes", id: uuidv4()}],
  };

  onClick = () => {
    const randIndex = Math.floor(Math.random() * 13);
    const oneMoreName = {
      name: names[randIndex],
      id: uuidv4(),
    }
    const newPeople = [...this.state.people, oneMoreName];
    this.setState({ people: newPeople });
  };

  render() {
    console.log(this.state.people)
    return (
      <>
        <button onClick={this.onClick}>Add Name</button>
            {this.state.people.map((name) => {
              return (
                <div key={name.id}>
                  <h3>{name.name}</h3>
                </div>

              )
              
            })}
      </>
    );
  }
}
export default App;
