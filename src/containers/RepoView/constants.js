/*
 * Repos types
 * Each action has a corresponding type which the reducer subscribes to.
 * To avoid typos and unexpected event firing between the reducer and the actions,
 * types are declared by prefixing them with 'appName/reducerName'.
 *
 * Either use the createActionNameSpace utility or follow this format:
 * export const ACTION_CONSTANT = 'appName/nameSpace/ACTION_NAME';
 */
import {createActionPrefix} from 'store';
import keyMirror from 'utils/keyMirror';

const prefix = createActionPrefix('repoView');
export const ActionTypes = keyMirror(
  {
    LOAD_REPOS_SUCCESS: undefined,
    LOAD_REPOS: undefined,
    LOAD_REPOS_ERROR: undefined,
    CHANGE_USERNAME: undefined,
  },
  prefix,
);

export default ActionTypes;
