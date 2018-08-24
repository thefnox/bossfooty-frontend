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

const makeSelectWorkoutError = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.get('error'));

const makeSelectDay = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.get('day'));

const makeSelectWorkoutData = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.get('workout'));

const makeSelectRepMaxesData = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.get('repMaxes'));

const makeSelectSuccessFetch = () =>
  createSelector(selectWorkoutPageDomain, substate => substate.get('success'));


export { 
  selectWorkoutPageDomain, 
  makeSelectTestResultError,
  makeSelectTestResultData,
  makeSelectDay,
  makeSelectWorkoutPage,
  makeSelectWorkoutData,
  makeSelectWorkoutError,
  makeSelectRepMaxesData,
  makeSelectSuccessFetch
};
