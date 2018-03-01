/**
 * Repos selectors
 */

import {createSelector} from 'reselect';
import {reducerKey} from './';

const selectRepos = state => state[reducerKey];

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
