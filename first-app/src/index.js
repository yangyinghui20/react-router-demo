import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducer/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
