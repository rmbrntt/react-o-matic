/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */
// Initial routing state
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
function route(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

export default route;
