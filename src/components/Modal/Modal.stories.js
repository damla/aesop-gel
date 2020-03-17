import React from 'react';
import { storiesOf } from '@storybook/react';
import { State } from '~.storybook/State';
import '~.storybook/storybook.module.css';
import ModalBodyFixture from './components/ModalBody/ModalBody.fixture';
import Button from '~/components/Button';
import Modal from './Modal';

const modalPortal = document.createElement('div');
modalPortal.setAttribute('id', 'modal');
document.body.append(modalPortal);

storiesOf('Components/Modal', module).add('Base component', () => (
  <State initialState={{ isVisible: false }}>
    {(state, setState) => (
      <>
        <Modal
          copy={ModalBodyFixture.copy}
          isVisible={state.isVisible}
          onClose={() => {
            setState(() => ({ ...state, isVisible: false }));
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mauris
          lacinia, sollicitudin dolor quis, pellentesque nibh. Integer pharetra
          ullamcorper leo sit amet dictum. Phasellus in pellentesque augue.
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
