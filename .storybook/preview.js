import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'alabaster', value: '#fffef0' },
    { name: 'dark', value: '#333' },
  ],
});

addDecorator(withA11y);
addDecorator(withKnobs);
