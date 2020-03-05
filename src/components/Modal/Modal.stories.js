import React from 'react';
import { storiesOf } from '@storybook/react';
import { State } from '~.storybook/State';
import '~.storybook/storybook.module.css';
import Button from '~/components/Button';
import Modal from './Modal';

const modalPortal = document.createElement('div');
modalPortal.setAttribute('id', 'modal');
document.body.append(modalPortal);

storiesOf('Modal', module).add('Base component', () => (
  <State initialState={{ isVisible: false }}>
    {(state, setState) => (
      <>
        <Modal
          isVisible={state.isVisible}
          onClose={() => {
            setState(() => ({ ...state, isVisible: false }));
          }}
        >
          <p>Modal content</p>
        </Modal>
        <Button
          onClick={() => {
            setState(() => ({ ...state, isVisible: true }));
          }}
          title="Open Modal"
        >
          Open Modal
        </Button>
      </>
    )}
  </State>
));
