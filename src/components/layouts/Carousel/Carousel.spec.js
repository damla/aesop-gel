import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CarouselFixture from './Carousel.fixture';
import Carousel from './Carousel';

configure({ adapter: new Adapter() });

describe('<Carousel />', () => {
  it('should be defined', () => {
    expect(Carousel).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Carousel
          introduction={CarouselFixture.introduction}
          slides={CarouselFixture.slides}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
