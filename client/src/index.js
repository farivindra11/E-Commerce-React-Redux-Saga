import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoBox from './components/TodoBox'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/chat'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <TodoBox />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
