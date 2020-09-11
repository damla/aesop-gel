import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductDetailImageFixture from './ProductDetailImage.fixture';
import ProductDetailImage from './ProductDetailImage';

configure({ adapter: new Adapter() });

describe('<ProductDetailImage />', () => {
  it('should be defined', () => {
    expect(ProductDetailImage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductDetailImage
          className={ProductDetailImageFixture.className}
          id={ProductDetailImageFixture.id}
          theme={ProductDetailImageFixture.theme}
          variantOptions={ProductDetailImageFixture.variantOptions}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
