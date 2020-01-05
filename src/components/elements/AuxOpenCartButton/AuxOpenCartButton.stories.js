import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import AuxOpenCartButton from './AuxOpenCartButton';

storiesOf('Elements.AuxOpenCartButton', module).add('Base component', () => (
  <AuxOpenCartButton handleShow={action('clicked')} />
));
