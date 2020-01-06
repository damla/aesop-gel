import React from 'react';
import renderer from 'react-test-renderer';
import AddToCartButton from './AddToCartButton';
import AddToCartButtonFixture from './AddToCartButton.fixture';

jest.mock('~/hooks/api/useMutationCreateCartEntry');

describe('<AddToCartButton />', () => {
  it('should be defined', () => {
    expect(AddToCartButton).toBeDefined();
  });

  it('should render the base component correctly', () => {
    const tree = renderer
      .create(
        <AddToCartButton
          dataTestRef="ADD_TO_CART_SMALL_CTA"
          disabled={AddToCartButtonFixture.disabled}
          handleOnClick={() => {}}
          name={AddToCartButtonFixture.name}
          price={AddToCartButtonFixture.price}
          sku={AddToCartButtonFixture.sku}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
