import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Quote from './Quote';
import QuoteFixture from './Quote.fixture';

storiesOf('Components/Quote', module).add('Base component', () => (
  <Quote
    author={text('author', QuoteFixture.author)}
    content={text('children', QuoteFixture.content)}
  />
));
