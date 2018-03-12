// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import {USER_LOGIN_REQUEST, USER_LOGOUT_REQUEST} from 'constants/ActionTypes';

/**
 * Login
 *
 * @returns {Object}
 */
export function login() {
  return {
    type: USER_LOGIN_REQUEST,
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
    type: USER_LOGOUT_REQUEST,
    payload: {},
  };
}
