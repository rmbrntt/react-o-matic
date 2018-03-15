/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux';

import ui from './ui';
import user from './user';
import route from './route';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function rootReducer(injectedReducers) {
  return combineReducers({
    route,
    ui,
    user,
    ...injectedReducers,
  });
}
