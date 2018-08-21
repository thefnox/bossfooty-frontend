/*
 *
 * QuizPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_QUIZ_DATA_SUCCESS, LOAD_QUIZ_DATA, LOAD_QUIZ_DATA_ERROR } from './constants';

export const initialState = fromJS({
  quizData: {},
  error: '',
});

function quizPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUIZ_DATA_SUCCESS:
      return state.set('quizData', action.quizData);
    case LOAD_QUIZ_DATA_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default quizPageReducer;
