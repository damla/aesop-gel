import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import CartInformation from './CartInformation';

storiesOf('CartView.CartInformation', module).add('Base component', () => (
  <CartInformation>Test</CartInformation>
));
