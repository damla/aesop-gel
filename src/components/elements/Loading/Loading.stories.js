import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Loading from './Loading';

storiesOf('Elements.Loading', module).add('Base component', () => (
  <Loading
    className={text('className', '')}
    isLight={boolean('isLight', false)}
    isLoading={boolean('isLoading', true)}
    small={boolean('isSmall', false)}
  />
));
