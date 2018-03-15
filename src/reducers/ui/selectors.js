/**
 * Global selectors
 */

import {createSelector} from 'reselect';

const selectUi = state => state.ui;

const makeSelectLoading = () =>
  createSelector(selectUi, uiState => uiState.loading);

const makeSelectError = () =>
  createSelector(selectUi, uiState => uiState.error);

export {selectUi, makeSelectLoading, makeSelectError};
