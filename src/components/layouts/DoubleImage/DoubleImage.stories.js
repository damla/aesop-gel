import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Figure from '~/components/elements/Figure';
import Image from '~/components/elements/Image';
import DoubleImage from './DoubleImage';
import DoubleImageFixture from './DoubleImage.fixture';

storiesOf('Layouts.DoubleImage', module).add('Base component', () => (
  <DoubleImage
    id={text('id', DoubleImageFixture.id)}
    left={
      <Figure
        caption={text('caption', DoubleImageFixture.left.figure.caption)}
        id={text('id', DoubleImageFixture.left.figure.id)}
      >
        <Image
          altText={text('altText', DoubleImageFixture.left.image.altText)}
          cta={{
            id: text('id', DoubleImageFixture.left.image.cta.url),
            url: text('url', DoubleImageFixture.left.image.cta.url),
          }}
          large={text('large', DoubleImageFixture.left.image.large)}
          medium={text('medium', DoubleImageFixture.left.image.medium)}
          small={text('small', DoubleImageFixture.left.image.small)}
        />
      </Figure>
    }
    right={
      <Figure
        caption={text('caption', DoubleImageFixture.right.figure.caption)}
        id={text('id', DoubleImageFixture.right.figure.id)}
      >
        <Image
          altText={text('altText', DoubleImageFixture.right.image.altText)}
          cta={{
            id: text('id', DoubleImageFixture.right.image.cta.url),
            url: text('url', DoubleImageFixture.right.image.cta.url),
          }}
          large={text('large', DoubleImageFixture.right.image.large)}
          medium={text('medium', DoubleImageFixture.right.image.medium)}
          small={text('small', DoubleImageFixture.right.image.small)}
        />
      </Figure>
    }
  />
));
