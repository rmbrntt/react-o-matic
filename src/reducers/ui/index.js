import actionTypes from 'constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_APP:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.LOAD_APP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOAD_APP_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default ui;
