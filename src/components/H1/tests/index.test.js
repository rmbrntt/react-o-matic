import React from 'react';

import H1 from '../index';

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = shallow(<H1 id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = shallow(<H1>{children}</H1>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
