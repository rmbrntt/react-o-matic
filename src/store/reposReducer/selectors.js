/**
 * Repos selectors
 */

import {createSelector} from 'reselect';
import {reducerName} from './';

const selectRepos = state => state[reducerName];

const makeSelectUsername = () =>
  createSelector(selectRepos, reposState => reposState.username);

const makeSelectCurrentUser = () =>
  createSelector(selectRepos, reposState => reposState.currentUser);

const makeSelectLoading = () =>
  createSelector(selectRepos, reposState => reposState.loading);

const makeSelectError = () =>
  createSelector(selectRepos, reposState => reposState.error);

const makeSelectRepos = () =>
  createSelector(selectRepos, reposState => reposState.repositories);

export {
  selectRepos,
  makeSelectUsername,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
};
