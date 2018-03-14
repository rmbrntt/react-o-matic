import {CHANGE_USERNAME} from '../types';

import {changeUsername} from '../actions';

describe('Repo Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Ryan';
      const expectedResult = {
        type: CHANGE_USERNAME,
        name: fixture,
      };

      expect(changeUsername(fixture)).toEqual(expectedResult);
    });
  });
});
