import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Overlay from './Overlay';

storiesOf('Elements.Overlay', module).add('Base component', () => (
  <Overlay isVisible={boolean('isVisible', false)} />
));
