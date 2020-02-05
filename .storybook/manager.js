import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    base: 'light',

    colorPrimary: '#333',
    colorSecondary: '#666',

    // UI
    appBg: '#fffef0',
    appContentBg: '#fffef0',
    appBorderColor: '#666',
    appBorderRadius: 0,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#333',
    textInverseColor: '#4a4a4a',

    // Toolbar default and active colors
    barTextColor: '#bcbbb4',
    barSelectedColor: '#fffef0',
    barBg: '#4a4a4a',

    // Form colors
    inputBg: '#fffef0',
    inputBorder: '#d5d4c9',
    inputTextColor: 'black',
    inputBorderRadius: 0,

    brandTitle: 'Aesop Global Experience Language',
    brandUrl: 'https://gel.aesop.com',
    brandImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg',
  },
});
