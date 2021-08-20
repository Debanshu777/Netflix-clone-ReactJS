import { takeLatest } from 'redux-saga/effects';
import { GET_NETFLIX_ORIGINAL_DATA } from '../ducks/fetchNetflixOriginals';
import { handleGetDynamic } from './handlers/handleGetDynamic';
import { GET_FETCH_TRENDING_DATA } from '../ducks/fetchTrending';

export default function* rootSaga() {
  yield takeLatest(GET_NETFLIX_ORIGINAL_DATA, handleGetDynamic);
  yield takeLatest(GET_FETCH_TRENDING_DATA, handleGetDynamic);
}
