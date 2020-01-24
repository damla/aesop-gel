import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import SubscriptionFormView from './SubscriptionFormView';

storiesOf('SubscriptionFormView', module).add('Base component', () => {
  // @TODO Figure out how we are injecting translated copy from graphQL into components
  return (
    // @ts-ignore
    <SubscriptionFormView
      copy={{
        submitLabel: text('submitLabel', 'Subscribe'),
        submitTitle: text('submitTitle', 'Subscribe'),
        description: text(
          'subscriptionDescription',
          'I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.',
        ),
      }}
    />
  );
});
