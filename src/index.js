//packages
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

//components
import store from './store.js'
import App from './components/App.js';

//The provider component wraps the application and gives all children access to the store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
