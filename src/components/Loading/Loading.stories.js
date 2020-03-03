import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Loading from './Loading';

storiesOf('Loading', module).add('Base component', () => (
  <Loading
    className={text('className', '')}
    isLight={boolean('isLight', false)}
    isLoading={boolean('isLoading', true)}
    small={boolean('isSmall', false)}
  />
));
