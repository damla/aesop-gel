import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import MainNavigation from './MainNavigation';

storiesOf('Views.HeaderView.MainNavigation', module).add(
  'Base component',
  () => <MainNavigation />,
);
