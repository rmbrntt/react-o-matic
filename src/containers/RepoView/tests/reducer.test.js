import {fromJS} from 'immutable';

import repoReducer from '../reducer';
import {changeUsername} from '../actions';

describe('repoReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      username: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(repoReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('username', fixture);

    expect(repoReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });
});
