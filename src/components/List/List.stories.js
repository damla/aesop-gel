import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, select } from '@storybook/addon-knobs';
import List from './List';

storiesOf('Components/List', module).add('Base component', () => (
  <List
    items={object('items', [
      { content: 'Fragrance', id: 'fragrance' },
      { content: 'Gifts', id: 'gifts' },
    ])}
    theme={select('theme', ['dark', 'light'], 'dark')}
  />
));
