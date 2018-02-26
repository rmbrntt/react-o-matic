/**
 * Global selectors
 */

import {createSelector} from 'reselect';
import {reducerName} from './';

const selectGlobal = state => state[reducerName];

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading);

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

export {selectGlobal, makeSelectLoading, makeSelectError};
