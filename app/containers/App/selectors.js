/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'repositories']),
  );

const makeSelectIsAuthed = () => 
  createSelector(selectGlobal, globalState => globalState.get('authed'));

const makeSelectIsSubbed = () => 
  createSelector(selectGlobal, globalState => globalState.get('subbed'));

const makeSelectIsSetup = () => 
  createSelector(selectGlobal, globalState => globalState.get('configured'));

const makeSelectUserData = () => 
  createSelector(selectGlobal, globalState => globalState.get('userData'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectIsAuthed,
  makeSelectIsSubbed,
  makeSelectIsSetup,
  makeSelectCurrentUser,
  makeSelectUserData,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
