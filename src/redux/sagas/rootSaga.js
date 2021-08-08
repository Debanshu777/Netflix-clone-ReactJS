import { takeLatest } from 'redux-saga/effects';
import { GET_NETFLIX_ORIGINAL_DATA } from '../ducks/fetchNetflixOriginals';
import { handleGetNetflixOriginals } from './handlers/netflixOriginals';

export function* netflixOriginalswatcherSaga() {
  yield takeLatest(GET_NETFLIX_ORIGINAL_DATA, handleGetNetflixOriginals);
}
