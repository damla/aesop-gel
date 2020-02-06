import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import DefinitionList from '~/components/DefinitionList';
import ImageWithHeaderAndContent from './ImageWithHeaderAndContent';
import ImageWithHeaderAndContentFixture from './ImageWithHeaderAndContent.fixture';

storiesOf('ImageWithHeaderAndContent', module)
  .add('Base component', () => (
    <ImageWithHeaderAndContent
      content={
        <DefinitionList
          items={ImageWithHeaderAndContentFixture.definitionList}
        />
      }
      copy={ImageWithHeaderAndContentFixture.copy}
      image={ImageWithHeaderAndContentFixture.image}
      reverse={boolean('reverse', false)}
      theme={select('theme', ['1', '2', '3', '4', '5'], '1')}
    />
  ))
  .add('Background variation', () => (
    <ImageWithHeaderAndContent
      copy={ImageWithHeaderAndContentFixture.copy}
      fullWidthImage={true}
      image={ImageWithHeaderAndContentFixture.imageFullWidth}
      reverse={true}
      theme={select('theme', ['1', '2', '3', '4', '5'], '1')}
    />
  ));
