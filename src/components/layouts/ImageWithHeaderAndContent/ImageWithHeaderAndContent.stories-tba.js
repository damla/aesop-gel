import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import DefinitionList from '~/components/elements/DefinitionList';
import ImageWithHeaderAndContent from './ImageWithHeaderAndContent';
import ImageWithHeaderAndContentFixture from './ImageWithHeaderAndContent.fixture';

storiesOf('Layouts.ImageWithHeaderAndContent', module).add(
  'Base component',
  () => (
    <ImageWithHeaderAndContent
      content={
        <DefinitionList
          items={ImageWithHeaderAndContentFixture.definitionList}
        />
      }
      copy={ImageWithHeaderAndContentFixture.copy}
      image={ImageWithHeaderAndContentFixture.image}
    />
  ),
);
