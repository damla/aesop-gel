import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { ProductDetailContextProvider } from '~/contexts/ProductDetail.context';
import ProductDetailFixture from '~/components/ProductDetail/ProductDetail.fixture';
import ProductDetailBodyFixture from '~/components/ProductDetailHeader/components/ProductDetailBody/ProductDetailBody.fixture';
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
        <div>
          <ProductDetailContextProvider
            value={{
              productDetail: ProductDetailFixture.product,
              updateProductDetail: () => {},
            }}
          >
            <ProductDetailHeader
              breadcrumbs={ProductDetailHeaderFixture.breadcrumbs}
              className={ProductDetailHeaderFixture.className}
              copy={{
                ingredients: ProductDetailBodyFixture.copy.ingredients,
              }}
              theme={ProductDetailHeaderFixture.theme}
            />
          </ProductDetailContextProvider>
        </div>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
