import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router'
import PeopleList from './H9.1'

ReactDOM.render(
  <React.StrictMode>
    <Router />
    <PeopleList />
  </React.StrictMode>,
  document.getElementById('root')
);

