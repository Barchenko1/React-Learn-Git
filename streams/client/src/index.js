import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import reducer from './reducers';
import thunk from 'redux-thunk';

const clientID = '280782117599-5f0d36ruusdm7o575r5m8v92sgqgffg8.apps.googleusercontent.com';
const clientSecret = 'rq9_f3QDOPiwk-zKXq4v6Rvj';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

