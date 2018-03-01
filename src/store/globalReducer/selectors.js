/**
 * Global selectors
 */

import {createSelector} from 'reselect';
import {reducerKey} from './';

const selectGlobal = state => state[reducerKey];

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading);

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

export {selectGlobal, makeSelectLoading, makeSelectError};
