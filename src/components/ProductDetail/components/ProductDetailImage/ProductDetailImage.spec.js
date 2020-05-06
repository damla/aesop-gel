import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductDetailImage from './ProductDetailImage';
import ProductDetailImageFixture from './ProductDetailImage.fixture';

configure({ adapter: new Adapter() });

describe('<ProductDetailImage />', () => {
  it('should be defined', () => {
    expect(ProductDetailImage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<ProductDetailImage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
