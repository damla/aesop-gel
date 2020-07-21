import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductDetailTitle from './ProductDetailTitle';
import ProductDetailTitleFixture from './ProductDetailTitle.fixture';

configure({ adapter: new Adapter() });

describe('<ProductDetailTitle />', () => {
  it('should be defined', () => {
    expect(ProductDetailTitle).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductDetailTitle
          className={ProductDetailTitleFixture.className}
          description={ProductDetailTitleFixture.description}
          id={ProductDetailTitleFixture.id}
          productName={ProductDetailTitleFixture.productName}
          theme={ProductDetailTitleFixture.theme}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
