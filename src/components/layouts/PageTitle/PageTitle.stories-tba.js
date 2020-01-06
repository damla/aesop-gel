import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import PageTitle from './PageTitle';

storiesOf('Layouts.PageTitle', module).add('Base component', () => (
  <PageTitle
    eyebrow={text('eyebrow', '')}
    id={text('id', 'Hydrating')}
    subcopy={text('subcopy', '')}
  >
    {text(
      'title',
      'Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream.',
    )}
  </PageTitle>
));

storiesOf('Layouts.PageTitle.Variations', module)
  .add('With subcopy', () => (
    <PageTitle id="Parsley">
      Title: Fortification of the highest order.
    </PageTitle>
  ))
  .add('With subcopy and eybrow', () => (
    <PageTitle
      eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
      id="Anti-Oxidant"
      subcopy="Subcopy: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
    >
      Title: Fortification of the highest order. Parsley Seed Anti-Oxidant
      Facial Hydrating Cream.
    </PageTitle>
  ));
