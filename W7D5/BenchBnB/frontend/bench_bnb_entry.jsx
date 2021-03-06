// React
import React from 'react';
import ReactDOM from 'react-dom';
// Component
import Root from './components/root';
// Util
import {login,logout,signup} from './util/session_api_util.js';
// store
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  // const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>,root);

});
