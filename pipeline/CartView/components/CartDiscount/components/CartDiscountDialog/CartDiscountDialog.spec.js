import React from 'react';
import renderer from 'react-test-renderer';
import CartDiscountDialog from './CartDiscountDialog';
import CartDiscountDialogFixture from './CartDiscountDialog.fixture';

const mockFn = jest.fn();

describe('<CartDiscountDialog />', () => {
  let copy;

  it('should be defined', () => {
    expect(CartDiscountDialog).toBeDefined();
  });

  beforeEach(() => {
    copy = CartDiscountDialogFixture.copy;
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <CartDiscountDialog
          copy={copy}
          handleClose={mockFn}
          isVisible={true}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
