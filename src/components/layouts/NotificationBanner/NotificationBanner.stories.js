import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Button from '~/components/elements/Button';
import NotificationBanner from './NotificationBanner';

const store = new Store({
  isVisible: false,
  message: '',
});

storiesOf('Layouts.NotificationBanner', module).add('Base component', () => (
  <State store={store}>
    <NotificationBanner
      handleClose={() => store.set({ isVisible: false })}
      isVisible={store.get('isVisible')}
      message={store.get('message')}
    />

    <Button
      onClick={() =>
        store.set({
          isVisible: true,
          message: 'Parsley Seed Cleansing Masque added to the cart',
        })
      }
      title="Trigger Notification Banner"
    >
      Trigger Notification Banner
    </Button>
  </State>
));
