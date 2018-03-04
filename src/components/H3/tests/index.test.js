import React from 'react';

import H3 from '../index';

describe('<H3 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = shallow(<H3 id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = shallow(<H3>{children}</H3>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
