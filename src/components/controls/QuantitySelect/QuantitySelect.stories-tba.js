import React from 'react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import QuantitySelect from './QuantitySelect';

const store = new Store({
  value: '',
});

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  event.persist();

  const submitAction = action('QuantitySelect: onChange');
  const {
    target: { value },
  } = event;

  store.set({ value });
  submitAction(event);
};

storiesOf('Controls.QuantitySelect', module).add('Base component', () => {
  return (
    <State store={store}>
      <QuantitySelect
        name={text('name', 'select')}
        onChange={handleChange}
        options={object('options', [
          {
            value: '1',
            label: '1',
          },
          {
            value: '2',
            label: '2',
          },
        ])}
        testReference={text('name', 'select')}
        value={store.get('value')}
      />
    </State>
  );
});
