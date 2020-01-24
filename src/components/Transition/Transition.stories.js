import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Transition from './Transition';

storiesOf('Transition', module).add('Base component', () => (
  <Transition active={true} type="fade">
    <div>Content</div>
  </Transition>
));
