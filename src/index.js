import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const Text = ({size, underline, name, color}) => {
  return <div className= "text" style={{color:color, fontSize:size, textDecoration: underline? 'underline': 'none'}}>{name}</div>
}

const Square = ({label, cssClass}) => {
  return <div className = {cssClass}>{label}</div>
}

ReactDOM.render(
  <React.StrictMode>
    <div className= "text-container">
    <Text name="Regular text"  />
    <Text name="Huge header" size="16px"/>
    <Text name="Danger notification" color="red" />
    <Text name="Underline text" underline={true} />
  </div> 

  <div className= "square-container">
    <Square label="BIG square" cssClass='big-square'/>
    <Square label="MIDDLE square" cssClass="middle-square"/>
    <Square label="SMALL square" cssClass="small-square"/>
  </div> 
  </React.StrictMode>,
  document.getElementById('root')
);

