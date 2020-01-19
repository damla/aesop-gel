import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import ProductTemplate from './ProductTemplate';
import ProductTemplateFixture from './ProductTemplate.fixture';

storiesOf('Layouts.PDPDetailsHeader', module).add('Base component', () => (
  <ProductTemplate data={ProductTemplateFixture.data} />
));
