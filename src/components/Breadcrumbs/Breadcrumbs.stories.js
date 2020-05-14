import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, select } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Breadcrumbs from './Breadcrumbs';

storiesOf('Components/Breadcrumbs', module).add('Base component', () => (
  <Breadcrumbs
    items={object(
      'items',
      [
        {
          label: 'Suspendisse quis elit',
          id: 'suspendisse-quis-elit',
          url: '/',
        },
        { label: 'Maecenas luctus', id: 'maecenas-luctus', url: '/' },
      ],
      'Copy',
    )}
    theme={select('theme', ['dark', 'light'], 'dark', 'User Interface')}
  />
));
