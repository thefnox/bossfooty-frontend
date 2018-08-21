import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the workoutPage state domain
 */

const selectWorkoutPageDomain = state => state.get('workout', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WorkoutPage
 */

const makeSelectTestResultError = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.get('error'));

const makeSelectTestResultData = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.get('testResult'));


const makeSelectWorkoutPage = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.toJS());

export { selectWorkoutPageDomain, makeSelectTestResultError, makeSelectTestResultData, makeSelectWorkoutPage};