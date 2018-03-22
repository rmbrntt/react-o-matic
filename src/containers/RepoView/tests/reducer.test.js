import repoReducer from '../reducer';
import {changeUsername} from '../actions';

describe('repoReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      username: '',
      currentUser: false,
      error: false,
      repositories: false,
      loading: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(repoReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'rmbrntt';
    const expectedResult = {
      ...state,
      username: fixture,
    };

    expect(repoReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });
});
