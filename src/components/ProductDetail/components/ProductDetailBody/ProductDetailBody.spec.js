import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductDetailBody from './ProductDetailBody';
import ProductDetailBodyFixture from './ProductDetailBody.fixture';

configure({ adapter: new Adapter() });

describe('<ProductDetailBody />', () => {
  it('should be defined', () => {
    expect(ProductDetailBody).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<ProductDetailBody />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
