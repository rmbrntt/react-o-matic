import keyMirror from 'utils/keyMirror';
import createActionPrefix from 'store/createActionPrefix';

const ActionTypes = {
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  LOAD_APP: undefined,
  LOAD_APP_SUCCESS: undefined,
  LOAD_APP_ERROR: undefined,
};

const prefix = createActionPrefix('app');

export {ActionTypes};

export default keyMirror(ActionTypes, prefix);
