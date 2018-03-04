/**
 * Testing our Button component
 */

import React from 'react';

import Button from '../index';

const handleRoute = () => {};
const href = 'http://barnett.io';
const children = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  mount(
    <Button href={href} {...props}>
      {children}
    </Button>,
  );

describe('<Button />', () => {
  it('should render an <a> tag if no route is specified', () => {
    const wrapper = renderComponent({href});
    expect(wrapper.find('a').length).toEqual(1);
  });

  it('should render a <button> tag to change route if the handleRoute prop is specified', () => {
    const wrapper = renderComponent({handleRoute});
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const wrapper = renderComponent();
    expect(wrapper.contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const wrapper = renderComponent({onClick: onClickSpy});
    wrapper.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('a').prop('className')).toBeDefined();
  });

  it('should not adopt a type attribute when rendering an <a> tag', () => {
    const type = 'text/html';
    const wrapper = renderComponent({href, type});
    expect(wrapper.find('a').prop('type')).toBeUndefined();
  });

  it('should not adopt a type attribute when rendering a button', () => {
    const type = 'submit';
    const wrapper = renderComponent({handleRoute, type});
    expect(wrapper.find('button').prop('type')).toBeUndefined();
  });
});
