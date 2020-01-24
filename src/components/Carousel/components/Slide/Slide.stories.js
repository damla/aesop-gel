import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import CarouselFixture from '../../Carousel.fixture';
import Slide from './Slide';

storiesOf('Carousel.Slide', module).add('Base component', () => (
  <Slide
    description={CarouselFixture.slides[0].description}
    heading={CarouselFixture.slides[0].heading}
    image={CarouselFixture.slides[0].image}
  />
));
