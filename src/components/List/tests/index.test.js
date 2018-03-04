import React from 'react';

import ListItem from 'components/ListItem';
import List from '../index';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const wrapper = shallow(<List component={ListItem} />);
    expect(wrapper.find(ListItem)).toBeDefined();
  });

  it('should pass all items props to rendered component', () => {
    const items = [{id: 1, name: 'Hello'}, {id: 2, name: 'World'}];

    const component = ({item}) => <ListItem>{item.name}</ListItem>; // eslint-disable-line react/prop-types

    const wrapper = shallow(<List items={items} component={component} />);
    expect(wrapper.find(component)).toHaveLength(2);
    expect(
      wrapper
        .find(component)
        .at(0)
        .prop('item'),
    ).toBe(items[0]);
    expect(
      wrapper
        .find(component)
        .at(1)
        .prop('item'),
    ).toBe(items[1]);
  });
});
