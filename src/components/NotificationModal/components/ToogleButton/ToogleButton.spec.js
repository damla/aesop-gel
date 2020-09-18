import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ToogleButton from './ToogleButton';

configure({ adapter: new Adapter() });

describe('<ToogleButton />', () => {
  it('should be defined', () => {
    expect(ToogleButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<ToogleButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
