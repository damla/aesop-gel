import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Button from '~/components/Button';
import DefinitionList from '~/components/DefinitionList';
import Transition from './Transition';

storiesOf('Transition', module).add('Base component', () => {
  /* eslint-disable react/prop-types */
  /** @TODO Make a HOC from State*/
  const State = ({ children }) => {
    const [state, setState] = React.useState(true);

    return <div>{children(state, setState)}</div>;
  };
  /* eslint-enable react/prop-types */

  return (
    <State>
      {(state, setState) => (
        <>
          <Button
            onClick={() => {
              setState(state => !state);
            }}
            title="Toggle Transition"
          >
            Toggle Transition
          </Button>
          <br />
          <br />
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
