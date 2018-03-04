import React from 'react';

import RepoListItem from 'containers/RepoListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import ReposList from '../index';

describe('<ReposList />', () => {
  it('should render the loading indicator when its loading', () => {
    const wrapper = shallow(<ReposList loading />);
    expect(wrapper.contains(<List component={LoadingIndicator} />)).toEqual(
      true,
    );
  });

  it('should render an error if loading failed', () => {
    const wrapper = mount(
      <ReposList loading={false} error={{message: 'Loading failed!'}} />,
    );
    expect(wrapper.text()).toMatch(/Something went wrong/);
  });

  it('should render the repositories if loading was successful', () => {
    const repos = [
      {
        owner: {
          login: 'rmbrntt',
        },
        html_url: 'https://github.com/rmbrntt/react-o-matic',
        name: 'react-o-matic',
        open_issues_count: 20,
        full_name: 'react-o-matic/react-o-matic',
      },
    ];
    const wrapper = shallow(<ReposList repos={repos} error={false} />);

    expect(
      wrapper.contains(<List items={repos} component={RepoListItem} />),
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const wrapper = shallow(
      <ReposList repos={false} error={false} loading={false} />,
    );

    expect(wrapper.html()).toEqual(null);
  });
});
