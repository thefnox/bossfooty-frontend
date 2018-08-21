import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TEST_RESULT_DATA } from './constants';
import { loadTestResultData, setTestResultData, setTestResultError } from './actions';
import { API_HOSTNAME } from 'utils/constants'
import request from 'utils/request';

export function* getTestResultData() {
  const requestURL = `${API_HOSTNAME}exercise/required`;

  try {
    const data = yield call(request, requestURL);
    yield put(setTestResultData(data))
  }
  catch(err) {
    yield put(setTestResultError(err));
  }
}

export default function* testResultData() {
  yield fork(getTestResultData)
  yield takeLatest(LOAD_TEST_RESULT_DATA, getTestResultData);
}
