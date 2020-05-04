import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Audio from './Audio';
import AudioFixture from './Audio.fixture';

configure({ adapter: new Adapter() });

describe('<Audio />', () => {
  it('should be defined', () => {
    expect(Audio).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Audio />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
