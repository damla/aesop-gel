import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import AddToCartButton from './AddToCartButton';

const store = new Store({
  dataTestRef: 'ADD_TO_CART_SMALL_CTA',
  disabled: false,
  price: '$625.00',
  sku: 'AFR21',
});

storiesOf('Elements.AddToCartButton', module).add('Base component', () => (
  <State store={store}>
    <AddToCartButton
      dataTestRef={store.get('dataTestRef')}
      disabled={store.get('disabled')}
      handleOnClick={() => {}}
      price={store.get('price')}
      sku={store.get('sku')}
    />
  </State>
));
