import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Transition from './Transition';

storiesOf('Transition', module).add('Base component', () => {
  // function State({ children }) {
  //   // eslint-disabl
  //   const [state, setState] = React.useState(false);
  //
  //   return <div>{children(state, setState)}</div>;
  // }

  return (
    <Transition isActiveOnMount={true} type="fade">
      <div>Content</div>
    </Transition>
  );
});
