import {selectRepos, makeSelectUsername} from '../selectors';

describe('selectRepos', () => {
  it('should select the home state', () => {
    const reposState = {
      userData: {},
    };
    const mockedState = {
      repos: reposState,
    };
    expect(selectRepos(mockedState)).toEqual(reposState);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectUsername();
  it('should select the username', () => {
    const username = 'rmbrntt';
    const mockedState = {
      repos: {
        username,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});
