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
          'https://acceptance.aesop.com/medias/marketing-full-bleed-1.jpg?context=bWFzdGVyfGltYWdlc3wyNDU0NzR8aW1hZ2UvanBlZ3xpbWFnZXMvaDI4L2g2Yy84OTQ0MzcyMzgzNzc0LmpwZ3wyMWQxMmJiNDM4M2Y3NDI5YjU0MDFiODVjYWJjMDJmY2Y3YTA0ZWMxODEzMjU3YTMyMzk1NzQ2YWNiZTk4MDUx 2x',
        ),
        medium: text(
          'video.fallbackImage.medium',
          'https://acceptance.aesop.com/medias/marketing-full-bleed-1.jpg?context=bWFzdGVyfGltYWdlc3wyNDU0NzR8aW1hZ2UvanBlZ3xpbWFnZXMvaDI4L2g2Yy84OTQ0MzcyMzgzNzc0LmpwZ3wyMWQxMmJiNDM4M2Y3NDI5YjU0MDFiODVjYWJjMDJmY2Y3YTA0ZWMxODEzMjU3YTMyMzk1NzQ2YWNiZTk4MDUx 2x',
        ),
        small: text(
          'video.fallbackImage.small',
          'https://acceptance.aesop.com/medias/marketing-full-bleed-1.jpg?context=bWFzdGVyfGltYWdlc3wyNDU0NzR8aW1hZ2UvanBlZ3xpbWFnZXMvaDI4L2g2Yy84OTQ0MzcyMzgzNzc0LmpwZ3wyMWQxMmJiNDM4M2Y3NDI5YjU0MDFiODVjYWJjMDJmY2Y3YTA0ZWMxODEzMjU3YTMyMzk1NzQ2YWNiZTk4MDUx 2x',
        ),
        type: text('type', 'componentFullBleedImage'),
      },
    }}
  />
));
