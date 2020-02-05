import { addDecorator } from '@storybook/react';
import { State } from '@sambego/storybook-state';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withPropsTable({
  propTablesExclude: [State],
}));
