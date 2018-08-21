import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the quizPage state domain
 */

const selectQuizPageDomain = state => state.get('quiz', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by QuizPage
 */

const makeSelectQuizError = () =>
  createSelector(selectQuizPageDomain, substate => substate.get('error'));

const makeSelectQuizData = () =>
  createSelector(selectQuizPageDomain, substate => substate.get('quizData'));

export { selectQuizPageDomain, makeSelectQuizError, makeSelectQuizData };
