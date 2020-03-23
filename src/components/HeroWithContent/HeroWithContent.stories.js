import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import HeroWithContent from './HeroWithContent';
import HeroWithContentFixture from './HeroWithContent.fixture';

const styleOptions = [
  'External Button Link',
  'External Text Link',
  'Internal Button Link',
  'Internal Text Link',
  'No Icon Link',
];

storiesOf('Components/HeroWithContent', module).add('Base component', () => (
  <HeroWithContent
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
    image={HeroWithContentFixture.image}
    theme={select('theme', ['dark', 'light'], 'light')}
  />
));

storiesOf('Components/HeroWithContent', module).add(
  'With Secondary CTA',
  () => (
    <HeroWithContent
      copy="Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin."
      cta={{
        text: 'About page',
        url: 'http://aesop.com',
        style: 'External Button Link',
      }}
      heading="Gentle Facial Cleansing Milk"
      image={HeroWithContentFixture.image}
      secondaryCta={{
        text: 'Read more',
        url: 'http://aesop.com',
        style: 'External Button Link',
      }}
      theme="light"
    />
  ),
);

storiesOf('Components/HeroWithContent', module).add('Dark Theme', () => (
  <HeroWithContent
    copy="Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin."
    cta={{
      url: 'http://aesop.com',
      text: 'Read more',
      style: 'Internal Button Link',
    }}
    eyebrow="Mild yet thorough cleanse"
    heading="Gentle Facial Cleansing Milk"
    image={HeroWithContentFixture.lightImage}
    secondaryCta={{
      text: 'Read more',
      url: 'http://aesop.com',
      style: 'External Button Link',
    }}
    theme="dark"
  />
));

storiesOf('Components/HeroWithContent', module).add('With Sub Nav', () => (
  <HeroWithContent
    heading="Gentle Facial Cleansing Milk"
    image={HeroWithContentFixture.image}
    subNavLinks={HeroWithContentFixture.subNavLinks}
    theme="light"
  />
));
