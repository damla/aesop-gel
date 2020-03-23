import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import TextOverHero from './TextOverHero';
import TextOverHeroFixture from './TextOverHero.fixture';

console.log('TextOverHeroFixture', TextOverHeroFixture);

const styleOptions = [
  'External Button Link',
  'External Text Link',
  'Internal Button Link',
  'Internal Text Link',
  'No Icon Link',
];

storiesOf('Components/TextOverHero', module).add('Base component', () => (
  <TextOverHero
    contentThemeOnMobile={select(
      'contentThemeOnMobile',
      ['dark', 'light'],
      'dark',
    )}
    copy={text(
      'copy',
      'Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin.',
    )}
    cta={{
      url: text('cta.url', 'http://aesop.com'),
      text: text('cta.text', 'Read more'),
      style: select('cta.style', styleOptions, 'Internal Button Link'),
    }}
    eyebrow={text('eyebrow', 'Mild yet thorough cleanse')}
    heading={text('heading', 'Gentle Facial Cleansing Milk')}
    id={text('id', 'ImageHeader-old-component')}
    image={TextOverHeroFixture.image}
    theme={select('theme', ['dark', 'light'], 'light')}
  />
));

storiesOf('Components/TextOverHero', module).add('With Secondary CTA', () => (
  <TextOverHero
    copy="Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin."
    cta={{
      text: 'About page',
      url: 'http://aesop.com',
      style: 'External Button Link',
    }}
    heading="Gentle Facial Cleansing Milk"
    image={TextOverHeroFixture.image}
    secondaryCta={{
      text: 'Read more',
      url: 'http://aesop.com',
      style: 'External Button Link',
    }}
    theme="light"
  />
));

storiesOf('Components/TextOverHero', module).add('Dark Theme', () => (
  <TextOverHero
    copy="Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin."
    cta={{
      url: 'http://aesop.com',
      text: 'Read more',
      style: 'Internal Button Link',
    }}
    eyebrow="Mild yet thorough cleanse"
    heading="Gentle Facial Cleansing Milk"
    image={TextOverHeroFixture.lightImage}
    secondaryCta={{
      text: 'Read more',
      url: 'http://aesop.com',
      style: 'External Button Link',
    }}
    theme="dark"
  />
));

storiesOf('Components/TextOverHero', module).add('With Sub Nav', () => (
  <TextOverHero
    heading="Gentle Facial Cleansing Milk"
    image={TextOverHeroFixture.image}
    subNavLinks={TextOverHeroFixture.subNavLinks}
    theme="light"
  />
));
