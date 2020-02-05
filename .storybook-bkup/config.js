import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import { State } from '@sambego/storybook-state';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';
import storybookInfoStyles from './storybook.info';
import aesopTheme from './aesopTheme';

// console.log('themes.dark', themes.dark)

// Option defaults.
addParameters({
  // theme: themes.dark,
});

// addDecorator(
//   withInfo({
//     header: false,
//     inline: true,
//     maxPropObjectKeys: 10,
//     maxPropsIntoLine: 10,
//     propTablesExclude: [State],
//     styles: stylesheet => storybookInfoStyles(stylesheet),
//   }),
// );

addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(withPropsTable({
  propTablesExclude: [State],
}));

configure(require.context('../src/components/', true, /\.stories\.js$/), module);
