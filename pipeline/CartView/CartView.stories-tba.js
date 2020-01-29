import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Button from '~/components/Button';
import CartView from './CartView';
import CartViewFixture from './CartView.fixture';

const store = new Store({
  isVisible: false,
});

storiesOf('CartView', module).add('Base component', () => (
  <State store={store}>
    <CartView
      copy={CartViewFixture.copy}
      handleOnClose={() => store.set({ isVisible: false })}
      isVisible={store.get('isVisible')}
    />
    <Button onClick={() => store.set({ isVisible: true })} title="open Cart">
      Open Cart
    </Button>
  </State>
));
