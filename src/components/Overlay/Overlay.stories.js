import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Overlay from './Overlay';

storiesOf('Overlay', module).add('Base component', () => (
  <Overlay isVisible={boolean('isVisible', false)} />
));
