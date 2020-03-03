/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import DefinitionList from '~/components/DefinitionList';
import Transition from './Transition';

storiesOf('Transition', module).add('Base component', () => {
  const State = ({ children }) => {
    const [state, setState] = React.useState(true);

    return <div>{children(state, setState)}</div>;
  };

  return (
    <State>
      {(state, setState) => (
        <>
          <button
            onClick={() => {
              setState(state => !state);
            }}
          >
            Button
          </button>
          <Transition
            isActive={state}
            type={select(
              'type',
              [
                'fade',
                'shiftInDown',
                'shiftInLeft',
                'slideDown',
                'slideRight',
                'slowFade',
                'zoom',
              ],
              'fade',
            )}
          >
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
        </>
      )}
    </State>
  );
});
