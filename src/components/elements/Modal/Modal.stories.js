import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Button from '~/components/elements/Button';
import Modal from './Modal';

const store = new Store({
  isVisible: false,
});

const modalPortal = document.createElement('div');
modalPortal.setAttribute('id', 'modal');
document.body.append(modalPortal);

storiesOf('Elements.Modal', module).add('Base component', () => (
  <State store={store}>
    <Modal
      handleClose={() => store.set({ isVisible: false })}
      isVisible={store.get('isVisible')}
    >
      <p>Modal content</p>
    </Modal>
    <Button
      onClick={() => store.set({ isVisible: true })}
      title="open Dialog Banner"
    >
      Open Modal
    </Button>
  </State>
));
