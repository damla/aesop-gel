import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import NextButton from './NextButton';

configure({ adapter: new Adapter() });

describe('<Carousel.NextButton />', () => {
  it('should be defined', () => {
    expect(NextButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<NextButton onClick={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
