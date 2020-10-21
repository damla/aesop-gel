import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { useExecuteOnImpression } from './useExecuteOnImpression';

const ComponentToMakeAnImpression = () => {
  const ref = useRef(null);

  // eslint-disable-next-line no-alert
  const functionToCallOnImpression = () => alert('I made an impression');
  useExecuteOnImpression(ref, 0.5, functionToCallOnImpression);
  const styling = {
    height: '500px',
    width: '500px',
    backgroundColor: 'red',
  };

  return <div ref={ref} style={styling} />;
};

storiesOf('Hooks/useExecuteOnImpression', module).add('Base hook', () => {
  return (
    <React.Fragment>
      <div style={{ height: '100vh' }}>
        Scroll down to see the hook's behaviour
      </div>
      <ComponentToMakeAnImpression />
    </React.Fragment>
  );
});
