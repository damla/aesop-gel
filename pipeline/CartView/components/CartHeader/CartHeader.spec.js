import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CartHeader from './CartHeader';
import CartHeaderFixture from './CartHeader.fixture';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<CartHeader />', () => {
  it('should be defined', () => {
    expect(CartHeader).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <CartHeader copy={CartHeaderFixture.copy} handleOnClose={mockFn} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
