import { call, put } from 'redux-saga/effects';
import { setData } from '../../ducks/fetchNetflixOriginals';
import requestGetData from '../requests/requestDynamic';

export function* handleGetDynamic(action: any): any {
  console.log(action.payload);
  try {
    const response = yield call(requestGetData, { requestURL: action.payload });
    const { data } = response;
    console.log(data);
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}
