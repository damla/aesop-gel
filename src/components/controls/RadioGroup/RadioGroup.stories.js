import React from 'react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import RadioGroup from './RadioGroup';

const store = new Store({
  value: '',
});

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.persist();
  const submitAction = action('RadioGroup: onChange');

  const {
    target: { value },
  } = event;

  store.set({ value });
  submitAction(event);
};

storiesOf('Controls.RadioGroup', module).add('Base component', () => {
  return (
    <State store={store}>
      <RadioGroup
        errorMessage={text('errorMessage', 'This is an error message')}
        name={text('name', 'radioGroup')}
        onChange={handleChange}
        onFocus={action('RadioGroup: onFocus')}
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
        testReference={text('name', 'radioGroup')}
        value={store.get('value')}
      />
    </State>
  );
});
