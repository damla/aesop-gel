import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import '~.storybook/storybook.module.css';
import { useOnScreen } from '~/customHooks/useOnScreen';
import DefinitionList from '~/components/DefinitionList';
import { P } from '~/components/Paragraph';
import Transition from '~/components/Transition';

storiesOf('Hooks/useOnScreen', module).add('useOnScreen', () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-50px');

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <P>
          The <code>useOnScreen</code> custom hook takes a ref of a DOM Element
          and an offset, and returns a boolean of true when that referenced
          element is within the viewport.
        </P>
        <P>
          Scroll down to see the next element reveal, with an offset of -50px.
        </P>
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
