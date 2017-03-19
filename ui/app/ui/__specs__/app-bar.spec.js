import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AppBar from '../app-bar';

function setup(propsExtension = {}) {
  const props = Object.assign({
    title: 'Hello World',
    signedIn: true,
    handleAppBarLeftClick: jest.fn(),
  }, propsExtension);

  const component = shallow(<AppBar.WrappedComponent {...props} />);

  return { props, component };
}

describe('AppBar', () => {
  it('matches snapshot', () => {
    const { component } = setup({ signedIn: true });
    expect(toJSON(component)).toMatchSnapshot();
  });
});
