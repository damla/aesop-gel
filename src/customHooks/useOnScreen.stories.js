import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import '~.storybook/storybook.module.css';
import { useOnScreen } from '~/customHooks/useOnScreen';
import DefinitionList from '~/components/DefinitionList';
import { P } from '~/components/Paragraph';
import Transition from '~/components/Transition';

storiesOf('Hooks/useOnScreen', module).add('useOnScreen', () => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref, '-50px');

  return (
    <div>
      <div style={{ height: '140vh' }}>
        <P>
          The <code>useOnScreen</code> custom hook takes a ref of a DOM Element
          and an offset, and returns a boolean of true when that referenced
          element is within the viewport.
        </P>
        <P>
          Scroll down to see the next element reveal, with an offset of -50px.
        </P>
      </div>
      <Transition isActive={isOnScreen} type="shiftInDown">
        <DefinitionList
          forwardedRef={ref}
          isVisible={isOnScreen}
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
  );
});
