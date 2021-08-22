import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fetchNetflixOriginals, fetchTopRated, fetchTrending } from './ducks/index';
import rootSaga from './sagas/rootSaga';

const reducer = combineReducers({
  fetchNetflixOriginals,
  fetchTopRated,
  fetchTrending,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
