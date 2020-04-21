import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ImageCarousel from './ImageCarousel';
import ImageCarouselFixture from './ImageCarousel.fixture';

configure({ adapter: new Adapter() });

describe('<ImageCarousel />', () => {
  it('should be defined', () => {
    expect(ImageCarousel).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<ImageCarousel slides={ImageCarouselFixture.slides} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
