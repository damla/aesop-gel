import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import HeaderView from './HeaderView';

storiesOf('HeaderView', module).add('Base component', () => <HeaderView />);
