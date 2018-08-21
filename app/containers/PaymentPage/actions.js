/*
 * Home Actions
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

import { SET_INFO, SET_INFO_ERROR, SET_STRIPE, REQUEST_INFO } from './constants';

export function setInfo(key) {
  return {
    type: SET_INFO,
    key,
  };
}

export function setStripe(stripeInstance) {
  return {
    type: SET_STRIPE,
    stripeInstance
  }
}

export function setInfoError({ message: error }) {
  return {
    type: SET_INFO_ERROR,
    error,
  };
}