import {LOAD_APP, LOAD_APP_SUCCESS, LOAD_APP_ERROR} from './types';

/**
 * Load the app, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_APP
 */
export function loadApp() {
  return {
    type: LOAD_APP,
  };
}

/**
 * Dispatched when the app is loaded by the request saga
 *
 *
 * @return {object}      An action object with a type of LOAD_APP_SUCCESS
 */
export function appLoaded() {
  return {
    type: LOAD_APP_SUCCESS,
  };
}

/**
 * Dispatched when loading the app fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_APP_ERROR passing the error
 */
export function appLoadingError(error) {
  return {
    type: LOAD_APP_ERROR,
    error,
  };
}
