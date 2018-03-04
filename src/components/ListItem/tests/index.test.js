import React from 'react';

import ListItem from '../index';

describe('<ListItem />', () => {
  it('should have a className', () => {
    const wrapper = mount(<ListItem className="test" />);
    expect(wrapper.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const wrapper = mount(<ListItem item={content} />);
    expect(wrapper.contains(content)).toBe(true);
  });
});
