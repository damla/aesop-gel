import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import RegionSelector from './RegionSelector';

storiesOf('Layouts.RegionSelector', module).add('Base component', () => (
  <RegionSelector>RegionSelector</RegionSelector>
));
