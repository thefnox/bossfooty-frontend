/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPayment = state => state.get('payment', initialState);

const makeSelectKey = () =>
  createSelector(selectPayment, paymentState => paymentState.get('key'));
  
const makeSelectError = () =>
  createSelector(selectPayment, paymentState => paymentState.get('error'));

const makeSelectStripe = () =>
  createSelector(selectPayment, paymentState => paymentState.get('stripeInstance'));

export { selectPayment, makeSelectKey, makeSelectError, makeSelectStripe };
