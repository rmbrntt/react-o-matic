// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import {actionTypes} from 'constants';

/**
 * Login
 *
 * @returns {Object}
 */
export function login() {
  return {
    type: actionTypes.USER_LOGIN_REQUEST,
    payload: {},
  };
}

/**
 * Logout
 *
 * @returns {Object}
 */
export function logOut() {
  return {
    type: actionTypes.USER_LOGOUT_REQUEST,
    payload: {},
  };
}
