import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import TextOverHero from './TextOverHero';

const styleOptions = [
  'External Button Link',
  'External Text Link',
  'Internal Button Link',
  'Internal Text Link',
  'No Icon Link',
];
const typeOptions = ['Relative', 'Absolute'];

storiesOf('Layouts.TextOverHeroImage', module).add('Base component', () => (
  <TextOverHero
    copy={text(
      'copy',
      'Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin.',
    )}
    // @ts-ignore
    cta={{
      id: text('cta.id', 'button-id'),
      openInANewWindow: boolean('cta.openInANewWindow', true),
      url: text('cta.url', 'http://aesop.com'),
      text: text('cta.text', 'Read more'),
      type: select('cta.type', typeOptions, 'Absolute'),
      style: select('cta.style', styleOptions, 'Internal Button Link'),
    }}
    id={text('id', 'ImageHeader-old-component')}
    title={text('id', 'Gentle Facial Cleansing Milk')}
    video={{
      autoplay: boolean('video.autoplay', true),
      id: text('video.id', 'TextOverHeroImage'),
      loop: boolean('video.loop', true),
      fallbackImage: {
        altText: text(
          'video.fallbackImage.altText',
          'Image of one of the offices in Tokyo',
        ),
        large: text(
          'video.fallbackImage.large',
          'https://release.aesop-web-ui.aesopdigital.io/images/full-bleed/large/mc-image-header-2.jpg 2x',
        ),
        medium: text(
          'video.fallbackImage.medium',
          'https://release.aesop-web-ui.aesopdigital.io/images/full-bleed/medium/mc-image-header-2.jpg 2x',
        ),
        small: text(
          'video.fallbackImage.small',
          'https://release.aesop-web-ui.aesopdigital.io/images/full-bleed/small/mc-image-header-2.jpg 2x',
        ),
        type: text('type', 'componentFullBleedImage'),
      },
    }}
  />
));
