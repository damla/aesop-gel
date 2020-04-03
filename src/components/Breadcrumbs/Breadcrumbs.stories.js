import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Breadcrumbs from './Breadcrumbs';

storiesOf('Components/Breadcrumbs', module).add('Base component', () => (
  <Breadcrumbs
    items={object('items', [
      { label: 'Fragrance', id: 'fragrance', url: '/' },
      { label: 'Gifts', id: 'gifts', url: '/' },
    ])}
  />
));
