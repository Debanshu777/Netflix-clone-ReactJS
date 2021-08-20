import { takeLatest } from 'redux-saga/effects';
import { GET_NETFLIX_ORIGINAL_DATA } from '../ducks/fetchNetflixOriginals';
import { handleGetDynamic } from './handlers/handleGetDynamic';

export default function* rootSaga() {
  console.log('here');
  yield takeLatest(GET_NETFLIX_ORIGINAL_DATA, handleGetDynamic);
}
