import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from "redux";
import reducer from './reducers'
import rootSaga from './sagas'
import {Provider} from 'react-redux'
import routes from './routes'
import {Router, browserHistory} from 'react-router'
import logger from 'redux-logger'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger()));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
