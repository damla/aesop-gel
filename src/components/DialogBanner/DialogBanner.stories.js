import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { State } from '~.storybook/State';
import '~.storybook/storybook.module.css';
import Button from '~/components/Button';
import DialogBanner from './DialogBanner';

storiesOf('Components/DialogBanner', module).add('Base component', () => (
  <State initialState={{ isVisible: false }}>
    {(state, setState) => (
      <>
        <DialogBanner
          cta={{
            text: 'Need assistance?',
            url: '/contact-us/',
          }}
          isVisible={state.isVisible}
          message={text(
            'message',
            'Our apologies, You have exceeded the maximum allowed quantity of this item.',
          )}
          onClose={() => setState({ ...state, isVisible: false })}
          // @ts-ignore
          position={select('position', ['top', 'bottom'], 'top')}
          showCloseButton={boolean('showCloseButton', true)}
          // @ts-ignore
          theme={select('theme', ['dark', 'black'], 'dark')}
          title={text('title', 'Maximum allowed quantity exceeded.')}
        />
        <Button
          onClick={() => setState({ ...state, isVisible: true })}
          title="open Dialog Banner"
        >
          Open Dialog Banner
        </Button>
      </>
    )}
  </State>
));
