import React from 'react';
import { storiesOf } from '@storybook/react';
import '~.storybook/storybook.module.css';
import { State } from '~.storybook/State';
import Button from '~/components/Button';
import Heading from '~/components/Heading';
import { P } from '~/components/Paragraph';
import FlyinPanel from './FlyinPanel';

storiesOf('Components/FlyinPanel', module).add('Base component', () => (
  <State initialState={{ isVisible: false }}>
    {(state, setState) => (
      <>
        <FlyinPanel
          isVisible={state.isVisible}
          onClose={() => {
            setState(() => ({ ...state, isVisible: false }));
          }}
          title="Ingredients"
        >
          <Heading level="2" size="xSmall">
            Product Ingredients
          </Heading>
          <P>
            Water (Aqua), Glycerin, Sodium Ascorbyl Phosphate, Niacinamide,
            PEG-40 Hydrogenated Castor Oil, Phenoxyethanol, Citric Acid, Xanthan
            Gum, Sodium Gluconate, Sodium Dehydroacetate, Bisabolol, Polysorbate
            20, Boswellia Carterii Oil, Fusanus Spicatus Wood Oil, Rosa
            Damascena Flower Oil, Biosaccharide Gum-1, Sodium Carrageenan,
            Glyceryl Caprylate, Sodium Anisate, Sodium Levulinate, Sea Salt
            (Maris sal), d-Limonene, Citronellol, Farnesol, Geraniol.
          </P>
          <P>
            This ingredient list is subject to change, customers should refer to
            the product packaging for the most up-to-date ingredient list.
          </P>
        </FlyinPanel>
        <Button
          onClick={() => {
            setState(() => ({ ...state, isVisible: true }));
          }}
          title="open Flyin"
        >
          Open Flyin
        </Button>
      </>
    )}
  </State>
));
