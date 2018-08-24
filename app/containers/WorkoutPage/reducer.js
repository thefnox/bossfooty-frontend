/*
 *
 * WorkoutPage reducer
 *
 */

import { fromJS } from 'immutable';
import { 
  LOAD_TEST_RESULT_DATA_SUCCESS,
  LOAD_TEST_RESULT_DATA,
  LOAD_TEST_RESULT_DATA_ERROR,
  LOAD_WORKOUT_DATA,
  LOAD_WORKOUT_DATA_SUCCESS,
  LOAD_WORKOUT_DATA_ERROR
} from './constants';

export const initialState = fromJS({
  testResult: [],
  workout: [],
  repMaxes: [],
  error: '',
  success: false,
  day: -1
});

function workoutPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TEST_RESULT_DATA_SUCCESS:
      return state
        .set('testResult', action.testResult)
        .set('success', true);
    case LOAD_TEST_RESULT_DATA_ERROR:
      return state.set('error', action.error);
    case LOAD_WORKOUT_DATA_SUCCESS:
      return state
        .set('workout', action.workout)
        .set('repMaxes', action.repMaxes)
        .set('success', true);
    case LOAD_WORKOUT_DATA_ERROR:
      return state.set('error', action.error);
    case LOAD_WORKOUT_DATA:
      return state.set('day', action.day);
    default:
      return state;
  }
}

export default workoutPageReducer;