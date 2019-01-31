import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(  //执行composeEnhancers函数，并传入新的redux中间件
  applyMiddleware(thunk)
);

const store = createStore(reducer, enhancer);

export default store;
