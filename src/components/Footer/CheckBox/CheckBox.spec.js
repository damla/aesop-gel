import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CheckBox from './CheckBox';

configure({ adapter: new Adapter() });

describe('<CheckBox />', () => {
  it('should be defined', () => {
    expect(CheckBox).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <CheckBox
          content="Subscribe to communications about Aesop products, services, stores, events and matters of cultural interest."
          name="test-checkbox"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
