import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
// import { createLogger } from 'redux-logger';
import * as registerServiceWorker from './registerServiceWorker.js';


// const logger = createLogger();
const rootReducer = combineReducers({
  searchRobots,
  requestRobots
})
const store = createStore(rootReducer, applyMiddleware(thunk))
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
registerServiceWorker.register();
