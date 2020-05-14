import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Product from './Product';
import ProductFixture from './Product.fixture';

configure({ adapter: new Adapter() });

describe('<Product />', () => {
  it('should be defined', () => {
    expect(Product).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<div />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
