import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import NextButton from './NextButton';

storiesOf('Carousel.NextButton', module).add('Base component', () => (
  <NextButton onClick={() => {}} />
));
