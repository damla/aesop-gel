import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import PageHeading from './PageHeading';

storiesOf('Components/PageHeading', module).add('Base component', () => (
  <PageHeading
    eyebrow={text(
      'eyebrow',
      'Eyebrow: Offers fortification of the highest order against free radicals.',
    )}
    heading={text(
      'heading',
      'Heading: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream.',
    )}
    id="Anti-Oxidant"
    subHeading={text(
      'subHeading',
      'SubHeading: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals.',
    )}
  />
));
