import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  backgrounds: [
    { name: 'light', value: '#fffef0', default: true },
    { name: 'dark', value: '#333' },
  ],
});

addDecorator(withA11y);
addDecorator(withKnobs);
