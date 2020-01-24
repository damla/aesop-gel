import React from 'react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Checkbox from './Checkbox';

const store = new Store({
  checkbox: false,
});

const handleChange = event => {
  event.persist();

  const submitAction = action('Checkbox: onChange');
  const {
    target: { checked, name },
  } = event;

  store.set({ [name]: !checked });
  submitAction(event);
};

storiesOf('Checkbox', module).add('Base component', () => {
  return (
    <State store={store}>
      <Checkbox
        checked={store.get('checkbox')}
        errorMessage={text('errorMessage', 'This is an error message')}
        label={text('label', 'Checkbox label')}
        name={text('name', 'checkbox')}
        onChange={handleChange}
        onFocus={action('Checkbox: onFocus')}
        testReference={text('name', 'checkbox')}
      />
    </State>
  );
});
