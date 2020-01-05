import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Transition from './Transition';

storiesOf('Elements.Transition', module).add('Base component', () => (
  <Transition active={true} type="fade">
    <div>Content</div>
  </Transition>
));
