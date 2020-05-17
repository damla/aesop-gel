import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductDetailHeader from './ProductDetailHeader';
import ProductDetailHeaderFixture from './ProductDetailHeader.fixture';

configure({ adapter: new Adapter() });

describe('<ProductDetailHeader />', () => {
  it('should be defined', () => {
    expect(ProductDetailHeader).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductDetailHeader
          breadcrumbs={ProductDetailHeaderFixture.breadcrumbs}
          className={ProductDetailHeaderFixture.className}
          theme={ProductDetailHeaderFixture.theme}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
