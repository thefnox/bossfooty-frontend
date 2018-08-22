import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TEST_RESULT_DATA, LOAD_WORKOUT_DATA } from './constants';
import { 
  loadTestResultData,
  setWorkoutData,
  setWorkoutError,
  setTestResultData,
  setTestResultError
} from './actions';
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

export function* getWorkoutData({ day }) {
  const requestURL = `${API_HOSTNAME}program/day/${day}`;

  try {
    const { exercises, repMaxes } = yield call(request, requestURL);
    yield put(setWorkoutData(exercises, repMaxes))
  }
  catch(err) {
    yield put(setWorkoutError(err));
  }
}

export default function* workoutData() {
  yield takeLatest(LOAD_TEST_RESULT_DATA, getTestResultData);
  yield takeLatest(LOAD_WORKOUT_DATA, getWorkoutData);
}
