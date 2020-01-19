import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import PDPDetailsSection from './PDPDetailsSection';
import PDPDetailsSectionFixture from './PDPDetailsSection.fixture';

const store = new Store({
  disabled: false,
  isUpdatingCart: false,
  updateSuccessful: false,
});

storiesOf('Layouts.PDPDetailsSection', module).add('Base component', () => (
  <State store={store}>
    <PDPDetailsSection
      copy={PDPDetailsSectionFixture.copy}
      field1Description={text(
        'field1Description',
        'Normal, combination and troubled skin',
      )}
      field1Label={text('field1Label', 'Suited to')}
      field2Description={text(
        'field2Description',
        'Clarified, smooth and gently cleanse',
      )}
      field2Label={text('field2Label', 'Skin feel')}
      ingredientText={text(
        'ingredientText',
        'Water (Aqua), Kaolin, Aloe Barbadensis Leaf Juice, Bentonite, Alcohol Denat., Glycerin, Illite, Phenoxyethanol, Lavandula Angustifolia (Lavender) Oil, Oenothera Biennis (Evening Primrose) Oil, Rosa Canina Fruit Oil, Linalool, Ormenis Multicaulis Oil, Limonene, Carum Petroselinum (Parsley) Seed Oil, Geraniol',
      )}
      keyIngredient={text(
        'keyIngredient',
        'Licorice Root, Lactic Acid, Blackcurrant Seed',
      )}
      price={text('price', '$625.00')}
      sku={text('sku', 'AFR21')}
    />
  </State>
));
