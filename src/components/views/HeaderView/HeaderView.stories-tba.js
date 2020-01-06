import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import HeaderView from './HeaderView';

storiesOf('Views.HeaderView', module).add('Base component', () => (
  <HeaderView />
));
