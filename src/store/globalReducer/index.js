import {LOAD_APP, LOAD_APP_SUCCESS, LOAD_APP_ERROR} from './types';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOAD_APP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOAD_APP_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const reducerName = 'global';

export default globalReducer;
