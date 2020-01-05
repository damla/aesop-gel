import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import DefinitionList from './DefinitionList';
import DefinitionListFixture from './DefinitionList.fixture';

storiesOf('Elements.DefinitionList', module).add('Base component', () => (
  <DefinitionList items={DefinitionListFixture.items} />
));
