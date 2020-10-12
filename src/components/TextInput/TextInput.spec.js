import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

configure({ adapter: new Adapter() });

describe('<TextInput />', () => {
  it('should be defined', () => {
    expect(TextInput).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<TextInput data-test-ref="test-data-ref" id="test-textinput" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
