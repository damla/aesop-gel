import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import 'normalize.css';
import Heading from './Heading';

const levelOptions = [1, 2, 3, 4, 5, 6];
const sizeOptions = ['xSmall', 'small', 'medium', 'large', 'xLarge'];

storiesOf('Heading', module)
  .add('Base component', () => (
    <Heading hasTopMargin={true} isFlush={false} level={1} size="large">
      Fortification of the highest order
    </Heading>
  ))
  .add('Component with knobs', () => (
    <Heading
      className={text('className', 'storybook-heading-class')}
      hasTopMargin={boolean('hasTopMargin', true)}
      id={text('id', 'storybook-heading-class')}
      isFlush={boolean('isFlush', false)}
      isSerifFont={boolean('isSerifFont', false)}
      level={select('level', levelOptions, 1)}
      size={select('size', sizeOptions, 'large')}
    >
      {text('children', 'Fortification of the highest order')}
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
