import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import KitList from './KitList';
import KitListFixture from './KitList.fixture';

storiesOf('KitList', module).add('Base component', () => (
  <KitList items={KitListFixture.items} />
));
