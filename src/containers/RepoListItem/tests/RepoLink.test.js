import React from 'react';
import RepoLink from '../RepoLink';

describe('<RepoLink />', () => {
  it('should render an <a> tag', () => {
    const wrapper = mount(<RepoLink />);
    expect(wrapper.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<RepoLink />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<RepoLink id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<RepoLink attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
