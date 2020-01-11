import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import { State } from '@sambego/storybook-state';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import storybookInfoStyles from '~/styles/storybook.info';

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});

addDecorator(
  withInfo({
    header: true,
    inline: true,
    maxPropObjectKeys: 10,
    maxPropsIntoLine: 3,
    propTablesExclude: [State],
    styles: stylesheet => storybookInfoStyles(stylesheet),
  }),
);

addDecorator(withA11y);
addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.js$/), module);
