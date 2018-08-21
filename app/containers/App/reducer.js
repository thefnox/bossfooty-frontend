/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR, LOAD_USER_STATUS, LOAD_USER_STATUS_SUCCESS, LOAD_USER_STATUS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  authed: false,
  subbed: false,
  configured: false,
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_STATUS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('authed', false)
        .set('subbed', false)
        .set('configured', false)
    case LOAD_USER_STATUS_SUCCESS:
      return state
        .set('authed', action.authed)
        .set('subbed', action.subbed)
        .set('configured', action.configured)
        .set('loading', false)
        .set('userData', action.userData)
    case LOAD_USER_STATUS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
