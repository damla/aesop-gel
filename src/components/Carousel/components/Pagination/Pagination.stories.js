import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Pagination from './Pagination';

storiesOf('Carousel.PreviousButton', module).add('Base component', () => (
  <Pagination dots={[]} />
));
