import { addons } from '@storybook/addons';
import { themes, create } from '@storybook/theming';

const theme = create({
  base: 'light',
  colorPrimary: '#333',
  colorSecondary: '#333',
  brandTitle: 'Aesop Global Experience Language',
  brandUrl: 'https://aesop.github.io/aesop-gel/',
  brandImage:
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg',
});

addons.setConfig({
  theme,
});

// colorPrimary: '#333',
// colorSecondary: '#666',
//
// // UI
// appBg: '#f4f8fb',
// appContentBg: '#fff',
// appBorderColor: '#fff',
// appBorderRadius: 0,
//
// // Typography
// fontBase: '"Suisse Regular", "Open Sans", sans-serif',
// fontCode: 'monospace',
//
// // Text colors
// textColor: '#333',
// textInverseColor: '#4a4a4a',
//
// // Toolbar default and active colors
// barTextColor: '#333',
// barSelectedColor: '#333',
// barBg: '#fff',
//
// // Form colors
// inputBg: '#f4f8fb',
// inputBorder: '#333',
// inputTextColor: '333',
// inputBorderRadius: 0,
//
// brandTitle: 'Aesop Global Experience Language',
// brandUrl: 'https://aesop.github.io/aesop-gel/',
// brandImage:
//   'https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg',
