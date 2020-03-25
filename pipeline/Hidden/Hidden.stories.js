import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Hidden from './Hidden';

storiesOf('Hidden', module).add('Base component', () => (
  <Hidden
    large={boolean('large', false)}
    medium={boolean('medium', false)}
    small={boolean('small', true)}
    visuallyHidden={boolean('visuallyHidden', false)}
    xLarge={boolean('xLarge', false)}
  >
    <span>Hidden content</span>
  </Hidden>
));
