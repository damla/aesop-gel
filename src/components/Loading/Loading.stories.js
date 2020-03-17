import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Loading from './Loading';

storiesOf('Components/Loading', module).add('Base component', () => (
  <Loading
    className={text('className', '')}
    isLoading={boolean('isLoading', true)}
    small={boolean('isSmall', false)}
    theme={select('theme', ['dark', 'light'], 'dark')}
  />
));
