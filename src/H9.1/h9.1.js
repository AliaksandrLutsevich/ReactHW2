import React from "react";
import names from "./names.json";

class PeopleList extends React.Component {
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
    console.log(this.state.people)
    return (
      <>
        <button onClick={this.onClick}>Add Name</button>
            {this.state.people.map((name) => {
              return (
                <div key={name.index}>
                  <h3>{name}</h3>
                </div>
              )
            })}
      </>
    );
  }
}
export default PeopleList;
