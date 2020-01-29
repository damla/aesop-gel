import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Button from '~/components/Button';
import { P } from '~/components/Paragraph';
import FlyinPanel from './FlyinPanel';

const store = new Store({
  isVisible: false,
});

storiesOf('FlyinPanel', module).add('Base component', () => (
  <State store={store}>
    <FlyinPanel
      handleClose={() => store.set({ isVisible: false })}
      isVisible={store.get('isVisible')}
      title="Ingredients"
    >
      <P>
        Water (Aqua), Glycerin, Sodium Ascorbyl Phosphate, Niacinamide, PEG-40
        Hydrogenated Castor Oil, Phenoxyethanol, Citric Acid, Xanthan Gum,
        Sodium Gluconate, Sodium Dehydroacetate, Bisabolol, Polysorbate 20,
        Boswellia Carterii Oil, Fusanus Spicatus Wood Oil, Rosa Damascena Flower
        Oil, Biosaccharide Gum-1, Sodium Carrageenan, Glyceryl Caprylate, Sodium
        Anisate, Sodium Levulinate, Sea Salt (Maris sal), d-Limonene,
        Citronellol, Farnesol, Geraniol.
      </P>
      <P>
        This ingredient list is subject to change, customers should refer to the
        product packaging for the most up-to-date ingredient list.
      </P>
    </FlyinPanel>
    <Button onClick={() => store.set({ isVisible: true })} title="open Flyin">
      Open Flyin
    </Button>
  </State>
));
