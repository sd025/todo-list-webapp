import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './App.scss';
import { Provider } from 'react-redux';
import store from './app/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
  , document.getElementById('root'));