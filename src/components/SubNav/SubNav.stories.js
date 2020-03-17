import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import SubNav from './SubNav';
import SubNavFixture from './SubNav.fixture';

storiesOf('Components/SubNav', module).add('Base component', () => (
  <SubNav
    heading={SubNavFixture.heading}
    links={SubNavFixture.links}
    theme={select('theme', ['dark', 'light'], 'dark')}
  />
));
