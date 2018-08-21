/*
 *
 * QuizPage actions
 *
 */

import { LOAD_QUIZ_DATA_SUCCESS, LOAD_QUIZ_DATA, LOAD_QUIZ_DATA_ERROR } from './constants';

export function loadQuizData() {
  return {
    type: LOAD_QUIZ_DATA,
  };
}
export function setQuizData(quizData) {
  return {
    type: LOAD_QUIZ_DATA_SUCCESS,
    quizData,
  };
}

export function setQuizError({ message: error }) {
  return {
    type: LOAD_QUIZ_DATA_ERROR,
    error,
  };
}