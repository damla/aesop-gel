import React from 'react';
import { storiesOf } from '@storybook/react';
import '~.storybook/storybook.module.css';
import { select } from '@storybook/addon-knobs';
import KitList from './KitList';
import KitListFixture from './KitList.fixture';

storiesOf('Components/KitList', module).add('Base component', () => (
  <KitList
    items={KitListFixture.items}
    theme={select('theme', ['dark', 'light'], 'dark')}
  />
));
