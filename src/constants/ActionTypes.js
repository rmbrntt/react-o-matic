import keyMirror from 'utils/keyMirror';

const nameSpacePrefix = 'app/';
const ActionTypes = keyMirror(
  {
    USER_LOGIN_REQUEST: undefined,
    USER_LOGIN_SUCCESS: undefined,
    USER_LOGIN_FAILURE: undefined,
    USER_LOGOUT_REQUEST: undefined,
    USER_LOGOUT_SUCCESS: undefined,
    USER_LOGOUT_FAILURE: undefined,
    LOAD_APP: undefined,
    LOAD_APP_SUCCESS: undefined,
    LOAD_APP_ERROR: undefined,
  },
  nameSpacePrefix,
);

export default ActionTypes;
