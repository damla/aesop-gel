import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import mockAddToCartButtonOnClick from '~/components/AddToCartButton/__mocks__/AddToCartButton.onClick';
import ProductCommerce from './ProductCommerce';
import ProductCommerceFixture from './ProductCommerce.fixture';

configure({ adapter: new Adapter() });

describe('<ProductCommerce />', () => {
  it('should be defined', () => {
    expect(ProductCommerce).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductCommerce
          cta={ProductCommerceFixture.cta}
          description={ProductCommerceFixture.description}
          eyebrow={ProductCommerceFixture.eyebrow}
          heading={ProductCommerceFixture.heading}
          onAddToCartClick={mockAddToCartButtonOnClick}
          productName={ProductCommerceFixture.productName}
          theme="dark"
          variants={ProductCommerceFixture.variantOptions}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
