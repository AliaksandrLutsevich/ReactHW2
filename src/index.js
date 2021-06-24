import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkbox from './Checkbox.js';
import PlayerButton from './player.js';
import ChangedText from './Text.js';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Checkbox />
    <PlayerButton />
    <ChangedText />
  </React.StrictMode>,
  document.getElementById('root')
);


