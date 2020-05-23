import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Map from './Map';
import MapFixture from './Map.fixture';

configure({ adapter: new Adapter() });

describe('<Map />', () => {
  it('should be defined', () => {
    expect(Map).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Map />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
