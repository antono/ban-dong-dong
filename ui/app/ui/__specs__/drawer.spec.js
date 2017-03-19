import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Drawer from '../drawer';

function setup(propsExtension = {}) {
  const props = Object.assign({
    isOpen: false,
    handleOpenLink: jest.fn(),
    handleCloseDrawer: jest.fn(),
  }, propsExtension);

  const component = shallow(<Drawer.WrappedComponent {...props} />);

  return { props, component };
}

describe('Drawer', () => {
  it('matches snapshot', () => {
    const { component } = setup();
    expect(toJSON(component)).toMatchSnapshot();
  });
});
