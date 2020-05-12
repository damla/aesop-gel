import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Podium from './Podium';
import PodiumFixture from './Podium.fixture';

configure({ adapter: new Adapter() });

describe('<Podium />', () => {
  it('should be defined', () => {
    expect(Podium).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Podium />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
