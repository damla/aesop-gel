import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Textarea from './Textarea';

configure({ adapter: new Adapter() });

describe('<Textarea />', () => {
  it('should be defined', () => {
    expect(Textarea).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Textarea id="test-textarea" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
