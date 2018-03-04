import React from 'react';

import IssueIcon from '../index';

describe('<IssueIcon />', () => {
  it('should render a SVG', () => {
    const wrapper = shallow(<IssueIcon />);
    expect(wrapper.find('svg').length).toBe(1);
  });
});
