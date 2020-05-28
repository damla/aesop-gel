import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import StoreDetail from './StoreDetail';
import StoreDetailFixture from './StoreDetail.fixture';

configure({ adapter: new Adapter() });

describe('<StoreDetail />', () => {
  it('should be defined', () => {
    expect(StoreDetail).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<StoreDetail />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
