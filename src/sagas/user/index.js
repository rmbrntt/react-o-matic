/**
 * @module Sagas/User
 * @desc User
 */

import {delay} from 'redux-saga';
import {all, call, put, takeLatest} from 'redux-saga/effects';

import {actionTypes} from 'constants/index';

/**
 * Login
 */
export function* login() {
  try {
    yield call(delay, 400);

    yield put({
      type: actionTypes.USER_LOGIN_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: actionTypes.USER_LOGIN_FAILURE,
      payload: err,
    });
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield call(delay, 200);

    yield put({
      type: actionTypes.USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: actionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
// TODO: getting uncaught at root at root  with these constants?
export default function* root() {
  yield all([
    takeLatest(actionTypes.USER_LOGIN_REQUEST, login),
    takeLatest(actionTypes.USER_LOGOUT_REQUEST, logout),
  ]);
}
