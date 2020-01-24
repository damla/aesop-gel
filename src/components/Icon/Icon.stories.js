import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Icon from './Icon';
import svgs from './Icon.svgs';

storiesOf('Icon', module).add('Right Arrow', () => (
  <div className="aesop-gel-grid">
    {svgs.map((svg, key) => (
      <div className="aesop-gel-grid--cell" key={key}>
        <Icon name={svg.name} />
      </div>
    ))}
  </div>
));
