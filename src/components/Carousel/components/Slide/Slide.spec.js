import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CarouselFixture from '../../Carousel.fixture';
import Slide from './Slide';

configure({ adapter: new Adapter() });

describe('<Carousel.Slide />', () => {
  it('should be defined', () => {
    expect(Slide).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Slide
          description={CarouselFixture.slides[0].description}
          heading={CarouselFixture.slides[0].heading}
          image={CarouselFixture.slides[0].image}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a slide without a descritption correctly', () => {
    const tree = renderer
      .create(
        <Slide
          heading={CarouselFixture.slides[0].heading}
          image={CarouselFixture.slides[0].image}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a slide without a heading correctly', () => {
    const tree = renderer
      .create(
        <Slide
          description={CarouselFixture.slides[0].description}
          image={CarouselFixture.slides[0].image}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
