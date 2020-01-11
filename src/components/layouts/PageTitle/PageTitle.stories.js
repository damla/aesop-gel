import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import PageTitle from './PageTitle';

storiesOf('Layouts.PageTitle', module).add('Base component', () => (
  <PageTitle
    eyebrow={text(
      'eyebrow',
      'Eyebrow: Offers fortification of the highest order against free radicals.',
    )}
    id="Anti-Oxidant"
    subcopy={text(
      'subcopy',
      'Subcopy: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals.',
    )}
  >
    {text(
      'title',
      'Title: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream.',
    )}
  </PageTitle>
));
