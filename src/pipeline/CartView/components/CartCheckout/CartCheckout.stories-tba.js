import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import CartViewFixture from '~/components/CartView/CartView.fixture';
import CartCheckoutFixture from './CartCheckout.fixture';
import CartCheckout from './CartCheckout';

storiesOf('CartView.CartCheckout', module).add('Base component', () => (
  <CartCheckout
    copy={CartCheckoutFixture.copy}
    subTotalPrice={CartViewFixture.subTotalPrice}
  />
));
