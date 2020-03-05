import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { State } from '~.storybook/State';
import Button from '~/components/Button';
import DefinitionList from '~/components/DefinitionList';
import Transition from './Transition';

storiesOf('Transition', module).add('Base component', () => (
  <State initialState={{ isActive: false }}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(state => ({ ...state, isActive: !state.isActive }));
          }}
          title="Toggle Transition"
        >
          Toggle Transition
        </Button>
        <br />
        <br />
        <Transition
          isActive={state.isActive}
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
            'shiftInDown',
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
));
