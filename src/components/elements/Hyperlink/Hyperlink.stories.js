import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Hyperlink from './Hyperlink';

storiesOf('Elements.Hyperlink', module).add('Base component', () => (
  <Hyperlink url={text('url', 'http://aesop.com')}>
    {text('children', 'Aesop')}
  </Hyperlink>
));
