import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Icon from './Icon';

storiesOf('Elements.Icon', module).add('Right Arrow', () => (
  <Icon name={text('name', 'rightArrow')} />
));

storiesOf('Elements.Icon.Variations', module)
  .add('Right Arrow', () => <Icon name="rightArrow" />)
  .add('Right Up Arrow', () => <Icon name="rightUpArrow" />);
