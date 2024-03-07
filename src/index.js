import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './containers/App';
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
