import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import UserSession from './UserSession';

storiesOf('Views.HeaderView.UserSession', module).add('Base component', () => (
  <UserSession handleOnCartClick={() => false} />
));
