import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import { getPropTypeOptionValues } from '~/utils/propTypes';
import Button from './Button';
import { BUTTON_TYPE_PROP_TYPE_OPTIONS } from './Button.prop-types';

storiesOf('Button', module).add('Base component', () => (
  <Button
    className={text('className', '')}
    dataTestRef={text('dataTestRef', 'dataTestRef')}
    handleClick={action('clicked')}
    hasLightText={boolean('hasLightText', false)}
    id={text('id', '')}
    isAlternate={boolean('isAlternate', false)}
    isEnabled={boolean('isEnabled', true)}
    isInline={boolean('isInline', false)}
    tabIndex={text('tabIndex', '-1')}
    title={text('title', 'Aēsop')}
    type={select(
      'type',
      getPropTypeOptionValues(BUTTON_TYPE_PROP_TYPE_OPTIONS),
      'button',
    )}
  >
    {text('children', 'Button')}
  </Button>
));
