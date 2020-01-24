import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Quote from './Quote';
import QuoteFixture from './Quote.fixture';

storiesOf('Quote', module).add('Base component', () => (
  <Quote author={text('author', QuoteFixture.author)}>
    {text('children', QuoteFixture.content)}
  </Quote>
));
