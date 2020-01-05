import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Button from '~/components/elements/Button';
import DialogBanner from './DialogBanner';

const store = new Store({
  isVisible: false,
});

storiesOf('Layouts.DialogBanner', module).add('Base component', () => (
  <State store={store}>
    <DialogBanner
      cta={{
        text: 'Need assistance?',
        url: '/contact-us/',
      }}
      handleClose={() => store.set({ isVisible: false })}
      isVisible={store.get('isVisible')}
      message={text(
        'message',
        'Our apologies, You have exceeded the maximum allowed quantity of this item.',
      )}
      // @ts-ignore
      position={select('position', ['top', 'bottom'], 'top')}
      showCloseButton={boolean('showCloseButton', true)}
      // @ts-ignore
      theme={select('theme', ['dark', 'black'], 'dark')}
      title={text('title', 'Maximum allowed quantity exceeded.')}
    />
    <Button
      onClick={() => store.set({ isVisible: true })}
      title="open Dialog Banner"
    >
      Open Dialog Banner
    </Button>
  </State>
));
