/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { 
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_PAYMENT_INFO,
  LOAD_USER_STATUS,
  LOAD_USER_STATUS_SUCCESS,
  LOAD_USER_STATUS_ERROR
} from './constants';

export function loadPaymentInfo() {
  return {
    type: LOAD_PAYMENT_INFO
  }
}

export function loadUserStatus() {
  return {
    type: LOAD_USER_STATUS
  }
}

export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function userLoaded(authed, subbed, configured, userData) {
  return {
    type: LOAD_USER_STATUS_SUCCESS,
    authed,
    subbed,
    configured,
    userData
  };
}

export function userLoadingError(error) {
  return {
    type: LOAD_USER_STATUS_ERROR,
    error,
  };
}

export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
