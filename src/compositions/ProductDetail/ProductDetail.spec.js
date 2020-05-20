// import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
import ProductDetail from './ProductDetail';
// import ProductDetailFixture from './ProductDetail.fixture';

configure({ adapter: new Adapter() });

describe('<ProductDetail />', () => {
  it('should be defined', () => {
    expect(ProductDetail).toBeDefined();
  });
});
