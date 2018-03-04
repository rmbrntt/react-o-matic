/* global mount, shallow */
import React from 'react';

import IssueIcon from '../IssueIcon';

describe('<IssueIcon />', () => {
  it('should render an <svg> tag', () => {
    const wrapper = mount(<IssueIcon />);
    expect(wrapper.find('svg').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<IssueIcon />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<IssueIcon id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should adopt any attribute', () => {
    const wrapper = shallow(<IssueIcon attribute="test" />);
    expect(wrapper.prop('attribute')).toBeDefined();
  });
});
