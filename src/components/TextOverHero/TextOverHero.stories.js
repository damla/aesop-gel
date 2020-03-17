import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import TextOverHero from './TextOverHero';
import TextOverHeroFixture from './TextOverHero.fixture';

const styleOptions = [
  'External Button Link',
  'External Text Link',
  'Internal Button Link',
  'Internal Text Link',
  'No Icon Link',
];
const typeOptions = ['Relative', 'Absolute'];

storiesOf('Components/TextOverHero', module).add('Base component', () => (
  <TextOverHero
    copy={text(
      'copy',
      'Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin.',
    )}
    // @ts-ignore
    cta={{
      id: text('cta.id', 'button-id'),
      hasTargetInNewWindow: boolean('cta.hasTargetInNewWindow', true),
      url: text('cta.url', 'http://aesop.com'),
      text: text('cta.text', 'Read more'),
      type: select('cta.type', typeOptions, 'Absolute'),
      style: select('cta.style', styleOptions, 'Internal Button Link'),
    }}
    eyebrow={text('eyebrow', 'Mild yet thorough cleanse')}
    heading={text('heading', 'Gentle Facial Cleansing Milk')}
    id={text('id', 'ImageHeader-old-component')}
    image={TextOverHeroFixture.image}
    theme={select('theme', ['dark', 'light'], 'light')}
  />
));
