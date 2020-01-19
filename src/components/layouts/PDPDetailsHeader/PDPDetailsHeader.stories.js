import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import PDPDetailsHeader from './PDPDetailsHeader';

storiesOf('Layouts.PDPDetailsHeader', module).add('Base component', () => (
  <PDPDetailsHeader
    description={text(
      'description',
      'A clarifying formulation that removes surface impurities and offers mild exfoliation from Lactic Acid. Ideal for maintaining immaculately clean skin in polluted urban environments.',
    )}
    productName={text('name', 'Parsley Seed Facial Cleanser')}
  />
));
