import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Hyperlink from './Hyperlink';

storiesOf('Hyperlink', module)
  .add('Base component', () => (
    <Hyperlink url={text('url', 'http://aesop.com')}>
      {text('children', 'Aesop')}
    </Hyperlink>
  ))
  .add('Base foo', () => <Hyperlink url="http://aesop.com">Aesop</Hyperlink>);
