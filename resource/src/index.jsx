import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './sass/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { getKonseptsFromDatabase } from './manager/action/konseptAction';

const mystore = configureStore();
const container = document.getElementById('root');
const root = createRoot(container);

const renderApp = () => {
  const result = (
    <Provider store={mystore}>
      <App />
    </Provider>
  );

  root.render(result);
};

root.render(
  <div className='d-flex align-items-center justify-content-center'></div>
);

mystore.dispatch(getKonseptsFromDatabase()).then(() => {
  renderApp();
});