import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SigninButton from '../signin-button';

function setup() {
  const props = {
    handleSignIn: jest.fn()
  };

  const component = shallow(<SigninButton.WrappedComponent {...props} />);

  return { props, component };
}

describe('SigninButton', () => {
  it('matches snapshot', () => {
    const { component } = setup();
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('should have label', () => {
    const { component } = setup();
    expect(component.props().label).toBe('Sign In');
  });

  it('passes props.signin to FlatButton', () => {
    const { component, props } = setup();
    expect(component.find('FlatButton').props().onTouchTap).toBe(props.handleSignIn);
  });
});
