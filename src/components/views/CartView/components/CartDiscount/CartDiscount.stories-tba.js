import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import CartDiscount from './CartDiscount';
import CartDiscountFixture from './CartDiscount.fixture';

storiesOf('Views.CartView.CartDiscount', module).add('Base component', () => (
  <CartDiscount copy={CartDiscountFixture.copy} promotions={[]} />
));
