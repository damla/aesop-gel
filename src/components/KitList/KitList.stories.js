import React from 'react';
import { storiesOf } from '@storybook/react';
import '~.storybook/storybook.module.css';
import { boolean, select } from '@storybook/addon-knobs';
import KitList from './KitList';
import KitListFixture from './KitList.fixture';

storiesOf('Components/KitList', module).add('Base component', () => (
  <KitList
    isVisible={boolean('isActive', true)}
    items={KitListFixture.items}
    theme={select('theme', ['dark', 'light'], 'dark')}
  />
));
