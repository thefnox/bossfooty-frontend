/*
 * PaymentReducer
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

import { SET_INFO, SET_INFO_ERROR, SET_STRIPE } from './constants';

// The initial state of the App
export const initialState = fromJS({
  key: '',
  error: '',
  stripeInstance: null
});

function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return state.set('key', action.key);
    case SET_INFO_ERROR:
      return state.set('error', action.error);
    case SET_STRIPE:
      return state.set('stripeInstance', action.stripeInstance);
    default:
      return state;
  }
}

export default paymentReducer;
