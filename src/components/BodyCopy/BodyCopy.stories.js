import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import BodyCopy from './BodyCopy';

storiesOf('Components/BodyCopy', module).add('Base component', () => (
  <BodyCopy
    copy={
      <p>
        Parsley Seed Cream.{' '}
        <a href="http://theparisreview.org">The Paris Review</a> Intensely
        soothing, nourishing and hydrating, this elegant formulation contains a
        potent blend of botanicals that offer fortification of the highest order
        against free radicals.
      </p>
    }
    cta={{
      text: text('cta.text', 'Read more'),
      url: text('cta.url', 'http://aesop.com'),
      style: select(
        'cta.style',
        [
          'External Button Link',
          'External Text Link',
          'Internal Button Link',
          'Internal Text Link',
          'External No Icon Link',
          'No Icon Link',
        ],
        'External Button Link',
      ),
    }}
    eyebrow={text('eyebrow', 'Recommended Nearby')}
    hasSerifFontHeading={boolean('hasSerifFontHeading', false)}
    heading={text(
      'heading',
      'Aesop and The Paris Review: A Partnership Extended',
    )}
    subHeading={text('subHeading', 'Active Nutrients')}
    theme={select('theme', ['dark', 'light'], 'dark')}
  />
));
