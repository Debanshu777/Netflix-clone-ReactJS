import { call, put } from 'redux-saga/effects';
import requestGetData from '../requests/netflixOriginals';

export function* handleGetDynamic(action: any): any {
  console.log(action.payload);
  try {
    const response = yield call(requestGetData, { requestURL: action.props.url });
    const { data } = response;
    console.log(data);
    yield put(action.props.setDataFunction(data));
  } catch (error) {
    console.log(error);
  }
}
