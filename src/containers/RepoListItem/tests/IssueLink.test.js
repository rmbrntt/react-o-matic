import React from 'react';

import IssueLink from '../IssueLink';

describe('<IssueLink />', () => {
  it('should render an <a> tag', () => {
    const wrapper = mount(<IssueLink />);
    expect(wrapper.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<IssueLink />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<IssueLink id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<IssueLink attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
