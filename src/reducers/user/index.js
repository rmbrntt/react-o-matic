import actionTypes from 'constants';

export const initialState = {
  isAuthenticated: false,
  status: 'idle',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        status: 'running',
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        status: 'idle',
      };
    case actionTypes.USER_LOGOUT_REQUEST:
      return {
        ...state,
        status: 'running',
      };
    case actionTypes.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        status: 'idle',
      };
    default:
      return state;
  }
};

export default user;
