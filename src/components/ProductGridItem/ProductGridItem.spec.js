import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductGridItem from './ProductGridItem';
import ProductGridItemFixture from './ProductGridItem.fixture';

configure({ adapter: new Adapter() });

describe('<ProductGridItem />', () => {
  it('should be defined', () => {
    expect(ProductGridItem).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<ProductGridItem />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
