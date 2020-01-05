import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import SubNav from './SubNav';
import SubNavFixture from './SubNav.fixture';

storiesOf('Layouts.SubNav', module).add('Base component', () => (
  <SubNav
    links={object('links', SubNavFixture.items)}
    title={SubNavFixture.title}
  />
));
