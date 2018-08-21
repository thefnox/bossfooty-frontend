/*
 *
 * WorkoutPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_TEST_RESULT_DATA_SUCCESS, LOAD_TEST_RESULT_DATA, LOAD_TEST_RESULT_DATA_ERROR } from './constants';

export const initialState = fromJS({
  testResult: [],
  error: '',
});

function workoutPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TEST_RESULT_DATA_SUCCESS:
      return state.set('testResult', action.testResult);
    case LOAD_TEST_RESULT_DATA_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default workoutPageReducer;