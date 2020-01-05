import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import List from './List';

storiesOf('Elements.List', module).add('Base component', () => (
  <List
    items={object('items', [
      { content: 'Fragrance', id: 'fragrance' },
      { content: 'Gifts', id: 'gifts' },
    ])}
  />
));
