import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import BodyCopy from './BodyCopy';

storiesOf('BodyCopy', module).add('Base component', () => (
  <BodyCopy
    copy={text(
      'copy',
      'Parsley Seed Cream. [The Paris Review](http://theparisreview.org) Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals.',
    )}
    cta={{
      id: text('cta.id', 'button-id'),
      text: text('cta.text', 'Read more'),
      url: text('cta.url', 'http://aesop.com'),
      openInANewWindow: boolean('cta.openInANewWindow', true),
    }}
    eyebrow={text('eyebrow', 'Recommended Nearby')}
    id={text('id', 'Anti-Oxidant')}
    primaryTitle={text(
      'primaryTitle',
      'Aesop and The Paris Review: A Partnership Extended',
    )} // TBC -- nested component
    secondaryTitle={text('secondaryTitle', 'Active Nutrients')}
  />
));
