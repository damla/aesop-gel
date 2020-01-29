import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import ProductDetail from './ProductDetail';
import ProductDetailFixture from './ProductDetail.fixture';

storiesOf('ProductDetail', module).add('Base component', () => (
  <ProductDetail data={ProductDetailFixture.data} />
));
