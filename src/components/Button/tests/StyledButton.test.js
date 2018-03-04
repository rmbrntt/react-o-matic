import React from 'react';

import StyledButton from '../StyledButton';

describe('<StyledButton />', () => {
  it('should render an <button> tag', () => {
    const wrapper = shallow(<StyledButton />);
    expect(wrapper.type()).toEqual('button');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<StyledButton />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<StyledButton id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<StyledButton attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
