/**
 * @module containers/RepoView/constants
 */
import defineActionTypes from 'store/defineActionTypes';

export const actionTypes = defineActionTypes(
  {
    LOAD_REPOS_SUCCESS: undefined,
    LOAD_REPOS: undefined,
    LOAD_REPOS_ERROR: undefined,
    CHANGE_USERNAME: undefined,
  },
  'repoView',
);

export default actionTypes;
