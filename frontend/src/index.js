import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Then use AlertTemplate as needed in your code


const options = {
  timeout:3000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options} />
    <App />
  </Provider>
);

