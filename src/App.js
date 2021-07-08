import React from "react";
import "./App.css";
import data from "./data.json";

class App extends React.Component {
  render() {
    return (
      <div>
        {data.map((item, index) => {
          return (
            <div className='card'>
              <h3>{item.name.first}</h3> 
              <h4>{item.name.last}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
