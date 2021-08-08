import { call, put } from 'redux-saga/effects';
import { setData } from '../../ducks/fetchNetflixOriginals';
import { requestGetData } from '../requests/netflixOriginals';

export function* handleGetNetflixOriginals(): any {
  try {
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}
