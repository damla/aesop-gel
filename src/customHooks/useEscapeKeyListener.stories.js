import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';

storiesOf('Hooks', module).add('useOnScreen', () => {
  const onScreen = useOnScreen(ref, '-50px');

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to the next DefinitionList. </h1>
        <h3>The next DefinitionList will reveal after a 50px buffer.</h3>

        <Transition isActiveOnMount={true} type="shiftInDown">
          <DefinitionList
            items={[
              {
                term: 'Aroma',
                description: 'Fresh, woody, citrus',
              },
              {
                term: 'Usage',
                description:
                  'Spray  two to three pumps throughout the immediate space and refresh as needed; the aroma will last for several hours.',
              },
            ]}
          />
        </Transition>
      </div>
      <div ref={ref}>
        <Transition isActive={onScreen} type="shiftInDown">
          <DefinitionList
            items={[
              {
                term: 'Aroma',
                description: 'Fresh, woody, citrus',
              },
              {
                term: 'Usage',
                description:
                  'Spray  two to three pumps throughout the immediate space and refresh as needed; the aroma will last for several hours.',
              },
            ]}
          />
        </Transition>
      </div>
    </div>
  );
});
