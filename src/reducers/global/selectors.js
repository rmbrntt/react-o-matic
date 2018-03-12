/**
 * Global selectors
 */

import {createSelector} from 'reselect';

const selectGlobal = state => state.global;

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading);

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

export {selectGlobal, makeSelectLoading, makeSelectError};
