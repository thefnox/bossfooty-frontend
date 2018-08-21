import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_QUIZ_DATA } from './constants';
import { loadQuizData, setQuizData, setQuizError } from './actions';
import { API_HOSTNAME } from 'utils/constants'
import request from 'utils/request';

export function* getQuizInfo() {
  const requestURL = `${API_HOSTNAME}quiz`;

  try {
    const { quizData } = yield call(request, requestURL);
    yield put(setQuizData(quizData))
  }
  catch(err) {
    yield put(setQuizError(err));
  }
}

export default function* quizData() {
  yield fork(getQuizInfo)
  yield takeLatest(LOAD_QUIZ_DATA, getQuizInfo);
}
