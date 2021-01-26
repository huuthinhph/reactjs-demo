import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Logger with default options
import logger from 'redux-logger';
import reducer from '../reducers/rootReducer';
import rootSaga from '../saga';

const devEnv = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (devEnv) {
  middlewares.push(logger);
}
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);
const store = createStore(reducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
