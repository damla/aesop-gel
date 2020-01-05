import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import CartItem from './CartItem';
import CartItemFixture from './CartItem.fixture';

storiesOf('Views.CartView.CartItem', module).add('Base component', () => (
  <CartItem
    copy={{
      remove: text('copy.remove', 'Remove'),
    }}
    entryNumber={number('entryNumber', 0)}
    maxQuantity={number('maxQuantity', 5)}
    name={text('name', 'Reverence Aromatique Hand Balm')}
    price={text('price', '$33.00')}
    quantity={number('quantity', 2)}
    size={text('size', '75 mL')}
    url={text('url', '/product/')}
  />
));
