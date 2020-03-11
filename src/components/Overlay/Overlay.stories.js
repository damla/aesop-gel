import React from 'react';
import { storiesOf } from '@storybook/react';
import { State } from '~.storybook/State';
import '~.storybook/storybook.module.css';
import Button from '~/components/Button';
import Overlay from './Overlay';

storiesOf('Components/Overlay', module).add('Base component', () => {
  return (
    <State initialState={{ isVisible: false }}>
      {(state, setState) => (
        <>
          <Overlay
            isVisible={state.isVisible}
            onClose={() => {
              setState(() => ({ ...state, isVisible: false }));
            }}
          />
          <Button
            onClick={() => {
              setState(() => ({ ...state, isVisible: true }));
            }}
            title="Open Overlay"
          >
            Show Overlay
          </Button>
        </>
      )}
    </State>
  );
});
