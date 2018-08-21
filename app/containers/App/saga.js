/**
 * Gets the repositories of the user from Github
 */

import { call, put, fork, select, takeLatest } from 'redux-saga/effects';
import { LOAD_USER_STATUS } from 'containers/App/constants';
import { userLoaded, userLoadingError, loadUserStatus } from 'containers/App/actions';
import { API_HOSTNAME } from 'utils/constants'
import request from 'utils/request';
import auth from 'utils/auth';

/**
 * Github repos request/response handler
 */
export function* getUserData() {
  // Select username from store
  const token = auth.getToken();
  const requestURL = `${API_HOSTNAME}user/me`;

  if (!token){
    yield put(userLoaded(false, false, {}))
  }
  else {
    try {
      const response = yield call(request, requestURL);
      yield put(userLoaded(true, response.role && response.role.name === 'Subscribed', !!response.isSetup, response));
    } catch (err) {
      yield put(userLoadingError(err));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield fork(getUserData)
  yield takeLatest(LOAD_USER_STATUS, getUserData);
}
