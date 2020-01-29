import React from 'react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Select from './Select';

const store = new Store({
  value: '',
});

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  event.persist();

  const submitAction = action('Select: onChange');
  const {
    target: { value },
  } = event;

  store.set({ value });
  submitAction(event);
};

storiesOf('Select', module).add('Base component', () => {
  return (
    <State store={store}>
      <Select
        errorMessage={text('errorMessage', 'This is an error message')}
        label={text('label', 'Select label')}
        name={text('name', 'select')}
        onChange={handleChange}
        onFocus={action('Select: onFocus')}
        options={object('options', [
          {
            value: 'fabulist',
            label: 'Fabulist',
          },
          {
            value: 'ledger',
            label: 'Ledger',
          },
        ])}
        testReference={text('name', 'select')}
        value={store.get('value')}
      />
    </State>
  );
});
