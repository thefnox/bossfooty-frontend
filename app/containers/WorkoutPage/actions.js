/*
 *
 * QuizPage actions
 *
 */

import { LOAD_TEST_RESULT_DATA_SUCCESS, LOAD_TEST_RESULT_DATA, LOAD_TEST_RESULT_DATA_ERROR } from './constants';

export function loadTestResultData() {
  return {
    type: LOAD_TEST_RESULT_DATA,
  };
}
export function setTestResultData(testResult) {
  return {
    type: LOAD_TEST_RESULT_DATA_SUCCESS,
    testResult,
  };
}

export function setTestResultError({ message: error }) {
  return {
    type: LOAD_TEST_RESULT_DATA_ERROR,
    error,
  };
}