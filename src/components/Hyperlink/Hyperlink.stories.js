import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Hyperlink from './Hyperlink';

storiesOf('Components/Hyperlink', module).add('Base component', () => (
  <Hyperlink url={text('url', 'http://aesop.com')}>
    {text('children', 'Aesop')}
  </Hyperlink>
));
