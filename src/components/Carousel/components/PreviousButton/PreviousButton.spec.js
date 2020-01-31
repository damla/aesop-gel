import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import PreviousButton from './PreviousButton';

configure({ adapter: new Adapter() });

describe('<Carousel.PreviousButton />', () => {
  it('should be defined', () => {
    expect(PreviousButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<PreviousButton onClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
