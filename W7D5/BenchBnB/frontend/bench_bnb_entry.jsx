// React
import React from 'react';
import ReactDOM from 'react-dom';
// Util
import {login,logout,signup} from './util/session_api_util.js';
// store
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

});
