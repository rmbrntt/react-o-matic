/*
 * Repos reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import actionTypes from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  username: '',
  repositories: false,
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return {
        ...state,
        username: action.name.replace(/@/gi, ''),
      };
    case actionTypes.LOAD_REPOS:
      return {
        ...state,
        loading: true,
        error: false,
        repositories: false,
      };
    case actionTypes.LOAD_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.username,
        repositories: action.repos,
      };
    case actionTypes.LOAD_REPOS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default repos;
