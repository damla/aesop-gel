import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Transition from './Transition';

storiesOf('Transition', module).add('Base component', () => {
  function State({ children }) {
    const [state, setState] = React.useState(false);

    return <div>{children(state, setState)}</div>;
  }

  return (
    <State>
      {(state, setState) => {
        console.log('state', state);
        return (
          <>
            <button onClick={() => setState(state => !state)}>button</button>
            {state && (
              <Transition isActive={state} type="fade">
                <div>Content</div>
              </Transition>
            )}
          </>
        );
      }}
    </State>
  );
});
