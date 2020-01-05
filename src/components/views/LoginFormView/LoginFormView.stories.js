import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import LoginFormView from './LoginFormView';

storiesOf('Views.LoginFormView', module).add('Base component', () => (
  // @TODO Figure out how we are injecting translated copy from graphQL into components
  // @ts-ignore
  <LoginFormView
    copy={{
      submitLabel: 'Login',
      submitTitle: 'Login form submit button',
    }}
  />
));
