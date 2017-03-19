import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import UserMenu from '../user-menu';

function setup() {
  const props = {
    handleSignOut: jest.fn()
  };

  const component = shallow(<UserMenu.WrappedComponent {...props} />);

  return { props, component };
}

describe('UserMenu', () => {
  it('matches snapshot', () => {
    const { component } = setup();
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('should have some menu items', () => {
    const { component } = setup();
    expect(component.find('MenuItem').length).toBe(3);
  });

  it('should have signout menu item', () => {
    const { component, props } = setup();
    const signOutItem = component.find('MenuItem[primaryText="Sign Out"]');
    expect(signOutItem.length).toBe(1);
    expect(signOutItem.props().onTouchTap).toBe(props.handleSignOut);
  });
});
