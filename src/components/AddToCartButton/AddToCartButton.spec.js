import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AddToCartButton from './AddToCartButton';
import AddToCartButtonFixture from './AddToCartButton.fixture';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<AddToCartButton />', () => {
  it('should be defined', () => {
    expect(AddToCartButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <AddToCartButton
          className={AddToCartButtonFixture.className}
          copy={AddToCartButtonFixture.copy}
          dataTestRef={AddToCartButtonFixture.dataTestRef}
          hasError={false}
          isEnabled={AddToCartButtonFixture.isEnabled}
          isLoading={false}
          isUpdateSuccessful={false}
          onClick={mockFn}
          productName={AddToCartButtonFixture.productName}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
