/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PAYMENT_INFO } from 'containers/App/constants';
import { setInfo, setInfoError, setStripe } from 'containers/PaymentPage/actions';
import { API_HOSTNAME } from 'utils/constants'
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getPaymentInfo() {
  const requestURL = `${ API_HOSTNAME }payment`;

  try {
    // Call our request helper (see 'utils/request')
    const { data } = yield call(request, requestURL);
    yield put(setInfo(data.key));
    if (window.Stripe) {
      yield put(setStripe(window.Stripe(data.key)))
    }
    else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        put(setStripe(window.Stripe(data.key)))
      });
    }
  } catch (err) {
    yield put(setInfoError(err));
  }
}


export default function* paymentData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PAYMENT_INFO, getPaymentInfo);
}