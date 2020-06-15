import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductCommerce from './ProductCommerce';
// import ProductCommerceFixture from './ProductCommerce.fixture';

configure({ adapter: new Adapter() });

describe('<ProductCommerce />', () => {
  it('should be defined', () => {
    expect(ProductCommerce).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<ProductCommerce />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
