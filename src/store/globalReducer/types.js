/*
 * Global types
 * Each action has a corresponding type which the reducer subscribes to.
 * To avoid typos and unexpected event firing between the reducer and the actions,
 * types are declared by prefixing them with 'appName/reducerName'.
 *
 * Either use the createActionName utility or follow this format:
 *   export const ACTION_CONSTANT = 'appName/reducerName/ACTION_NAME';
 */
import {createActionName} from '../reducerUtils';
import {reducerName} from './';

export const LOAD_APP = createActionName(reducerName, 'LOAD_APP');
export const LOAD_APP_SUCCESS = createActionName(
  reducerName,
  'LOAD_APP_SUCCESS',
);
export const LOAD_APP_ERROR = createActionName(reducerName, 'LOAD_APP_ERROR');
