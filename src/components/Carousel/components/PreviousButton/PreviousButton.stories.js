import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import PreviousButton from './PreviousButton';

storiesOf('Carousel.PreviousButton', module).add('Base component', () => (
  <PreviousButton onClick={() => {}} />
));
