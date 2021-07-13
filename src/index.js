import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserList from './UserList'

ReactDOM.render(
  <React.StrictMode>
    <UserList />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

