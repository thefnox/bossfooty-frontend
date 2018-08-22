/*
 *
 * QuizPage actions
 *
 */

import { 
  LOAD_TEST_RESULT_DATA_SUCCESS, 
  LOAD_TEST_RESULT_DATA,
  LOAD_TEST_RESULT_DATA_ERROR,
  LOAD_WORKOUT_DATA_SUCCESS, 
  LOAD_WORKOUT_DATA,
  LOAD_WORKOUT_DATA_ERROR 
} from './constants';

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

export function loadWorkoutData(day) {
  return {
    type: LOAD_WORKOUT_DATA,
    day
  };
}
export function setWorkoutData(workout, repMaxes) {
  return {
    type: LOAD_WORKOUT_DATA_SUCCESS,
    workout,
    repMaxes
  };
}

export function setWorkoutError({ message: error }) {
  return {
    type: LOAD_WORKOUT_DATA_ERROR,
    error,
  };
}