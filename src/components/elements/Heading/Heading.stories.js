import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Heading from './Heading';

const levelOptions = ['1', '2', '3', '4', '5', '6'];
const sizeOptions = ['xSmall', 'small', 'medium', 'large', 'xLarge'];

const base = storiesOf('Elements.Heading', module);

base.add('Base component', () => (
  <Heading
    level={select('level', levelOptions, '1')}
    noMargin={boolean('noMargin', false)}
    noTopMargin={boolean('noTopMargin', false)}
    size={select('size', sizeOptions, 'large')}
  >
    {text('children', 'Fortification of the highest order')}
  </Heading>
));

const variation = storiesOf('Elements.Heading.Variations', module);

variation
  .add('Level 1, Size xLarge', () => (
    <Heading level="1" size="xLarge">
      Heading level="3" size="large" Fortification of the highest order. Parsley
      Seed Anti-Oxidant Facial Hydrating Cream 60mL
    </Heading>
  ))
  .add('Level 2, Size large', () => (
    <Heading level="2" size="large">
      Fortification of the highest order.
    </Heading>
  ))
  .add('Level 3, Size medium', () => (
    <Heading level="3" size="medium">
      Fortification of the highest order.
    </Heading>
  ))
  .add('Level 4, Size small', () => (
    <Heading level="4" size="small">
      Fortification of the highest order.
    </Heading>
  ))
  .add('Level 5, Size small', () => (
    <Heading level="5" size="small">
      Fortification of the highest order.
    </Heading>
  ))
  .add('Level 6, Size xSmall', () => (
    <Heading level="6" size="xSmall">
      Fortification of the highest order.
    </Heading>
  ))
  .add('All variations', () => (
    <div>
      <Heading level="1" size="xLarge">
        Heading level="2" size="xLarge" Fortification of the highest order.
        Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
      </Heading>
      <Heading level="2" size="large">
        Heading level="2" size="large" Fortification of the highest order.
        Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
      </Heading>
      <Heading level="3" size="medium">
        Heading level="3" size="medium" Fortification of the highest order.
        Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
      </Heading>
      <Heading level="4" size="small">
        Heading level="4" size="small" Fortification of the highest order.
        Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
      </Heading>
      <Heading level="5" size="small">
        Heading level="5" size="small" Fortification of the highest order.
        Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
      </Heading>
      <Heading level="6" size="xSmall">
        Heading level="6" size="xSmall" Fortification of the highest order.
        Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL
      </Heading>
    </div>
  ));
