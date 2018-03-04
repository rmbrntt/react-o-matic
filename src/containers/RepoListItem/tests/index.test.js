/**
 * Test the repo list item
 */

import React from 'react';

import ListItem from 'components/ListItem';
import {RepoListItem} from '../index';

const renderComponent = (props = {}) => render(<RepoListItem {...props} />);

describe('<RepoListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'rmbrntt',
      },
      html_url: 'https://github.com/rmbrntt/react-o-matic',
      name: 'react-o-matic',
      open_issues_count: 20,
      full_name: 'rmbrntt/react-o-matic',
    };
  });

  it('should render a ListItem', () => {
    const wrapper = shallow(<RepoListItem item={item} />);
    expect(wrapper.find(ListItem).length).toBe(1);
  });

  it('should not render the current username', () => {
    const wrapper = renderComponent({
      item,
      currentUser: item.owner.login,
    });
    expect(wrapper.text()).not.toContain(item.owner.login);
  });

  it('should render usernames that are not the current one', () => {
    const wrapper = renderComponent({
      item,
      currentUser: 'useffc',
    });
    expect(wrapper.text()).toContain(item.owner.login);
  });

  it('should render the repo name', () => {
    const wrapper = renderComponent({item});
    expect(wrapper.text()).toContain(item.name);
  });

  it('should render the issue count', () => {
    const wrapper = renderComponent({item});
    expect(wrapper.text()).toContain(item.open_issues_count);
  });

  it('should render the IssueIcon', () => {
    const wrapper = renderComponent({item});
    expect(wrapper.find('svg').length).toBe(1);
  });
});
