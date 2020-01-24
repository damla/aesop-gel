import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CartViewFixture from '~/components/CartView/CartView.fixture';
import CartCheckout from './CartCheckout';
import CartCheckoutFixture from './CartCheckout.fixture';

configure({ adapter: new Adapter() });

describe('<CartCheckout />', () => {
  it('should be defined', () => {
    expect(CartCheckout).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <CartCheckout
          copy={CartCheckoutFixture.copy}
          subTotalPrice={CartViewFixture.subTotalPrice}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
