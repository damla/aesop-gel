import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import DefinitionList from '~/components/DefinitionList';
import ImageWithHeaderAndContent from './ImageWithHeaderAndContent';
import ImageWithHeaderAndContentFixture from './ImageWithHeaderAndContent.fixture';

storiesOf('ImageWithHeaderAndContent', module).add('Base component', () => (
  <ImageWithHeaderAndContent
    content={
      <DefinitionList items={ImageWithHeaderAndContentFixture.definitionList} />
    }
    copy={ImageWithHeaderAndContentFixture.copy}
    image={ImageWithHeaderAndContentFixture.image}
  />
));
