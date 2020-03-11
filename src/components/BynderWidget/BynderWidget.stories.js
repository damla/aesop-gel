import React from 'react';
import { storiesOf } from '@storybook/react';
import '~.storybook/storybook.module.css';
import BynderWidget from './BynderWidget';

storiesOf('Components/BynderWidget', module).add('Base component', () => (
  <BynderWidget
    heading="Media Releases"
    id="6E8E63F9-7A54-442B-861E291124E19D94"
  />
));
