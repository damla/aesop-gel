import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import CarouselFixture from './Carousel.fixture';
import Carousel from './Carousel';

storiesOf('Carousel', module).add('Base component', () => (
  <Carousel
    introduction={CarouselFixture.introduction}
    slides={CarouselFixture.slides}
  />
));
