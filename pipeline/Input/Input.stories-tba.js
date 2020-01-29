import React from 'react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Input from './Input';

const typeOptions = ['text', 'password', 'date', 'number', 'time'];
const store = new Store({
  value: '',
});

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.persist();

  const submitAction = action('Input: onChange');
  const {
    target: { value },
  } = event;

  store.set({ value });
  submitAction(event);
};

storiesOf('Input', module).add('Base component', () => (
  <State store={store}>
    <Input
      errorMessage={text('errorMessage', 'This is an error message')}
      label={text('label', 'Input label')}
      name={text('name', 'input')}
      onChange={handleChange}
      onFocus={action('Input: onFocus')}
      placeholder={text('placeholder', '')}
      testReference={text('name', 'input')}
      // @ts-ignore
      type={select('type', typeOptions, 'text')}
      value={store.get('value')}
    />
  </State>
));
