import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetchNetflixOriginals from './ducks/fetchNetflixOriginals';
import rootSaga from './sagas/rootSaga';

const reducer = combineReducers({
  fetchNetflixOriginals,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
