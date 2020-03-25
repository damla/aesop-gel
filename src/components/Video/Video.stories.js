import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import DefinitionList from '~/components/TwoColumnLayout';
import ImageWithHeaderAndContentFixture from '~/components/ImageWithHeaderAndContent/ImageWithHeaderAndContent.fixture';
import ImageWithHeaderAndContent from '~/components/ImageWithHeaderAndContent';
import Video from './Video';

storiesOf('Components/Video', module).add('Base component', () => (
  <ImageWithHeaderAndContent
    content={
      <DefinitionList items={ImageWithHeaderAndContentFixture.definitionList} />
    }
    copy={ImageWithHeaderAndContentFixture.copyKit}
    image={ImageWithHeaderAndContentFixture.image}
    video={
      <Video
        hasAllowAudio={boolean('hasAllowAudio', false)}
        hasAutoplay={boolean('hasAutoplay', false)}
        hasLoop={boolean('hasLoop', false)}
        hasPlayInFullScreen={boolean('hasPlayInFullScreen', true)}
        id={text('id', 'video')}
        large={text(
          'large',
          'https://player.vimeo.com/external/225136214.hd.mp4?s=a01cd8b47f35767394e48dc01af10510ef8ff4dd&profile_id=174',
        )}
        poster={{
          altText: 'How to Use Video for Tea Tree Leaf Facial Exfoliant',
          fullBleedImage: boolean('poster.fullBleedImage', false),
          large:
            'assets/images/MediaWithContent/Large-PNG-AESOP-HWYL-HYBRIS-PRODUCT-PAGE-VIDEO-TABLET-1536x1920px-1-.png',
          medium:
            'assets/images/MediaWithContent/Large-PNG-AESOP-HWYL-HYBRIS-PRODUCT-PAGE-VIDEO-TABLET-1536x1920px-1-.png',
          small:
            'assets/images/MediaWithContent/Large-PNG-AESOP-HWYL-HYBRIS-PRODUCT-PAGE-VIDEO-TABLET-1536x1920px-1-.png',
        }}
      />
    }
  />
));
