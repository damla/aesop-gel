import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Paragraph from './Paragraph';

storiesOf('Elements.Paragraph', module).add('Base component', () => (
  <Paragraph>
    A lightweight, vitamin C-rich layering serum that soothes, replenishes and
    balances skin with its complex blend of anti-oxidant, hydrating and
    conditioning ingredients.
  </Paragraph>
));
