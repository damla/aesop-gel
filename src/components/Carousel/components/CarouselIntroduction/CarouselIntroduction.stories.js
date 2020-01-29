import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import CarouselFixture from '../../Carousel.fixture';
import CarouselIntroduction from './CarouselIntroduction';

storiesOf('Carousel.CarouselIntroduction', module).add('Base component', () => (
  <CarouselIntroduction
    description={CarouselFixture.introduction.description}
    heading={CarouselFixture.introduction.heading}
  />
));
