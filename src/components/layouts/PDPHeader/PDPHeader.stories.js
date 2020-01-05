import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import { client } from '~/lib/apollo/client';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import PDPHeader from './PDPHeader';
import { ProductContext } from '~/components/contexts/ProductContext/ProductContext';

const product = {
  name: text('name', 'Parsley Seed Facial Cleanser'),
  field1Label: text('field1Label', 'Suited to'),
  field1Description: text(
    'field1Description',
    'Normal, combination and troubled skin',
  ),
  field2Label: text('field2Label', 'Skin feel'),
  field2Description: text(
    'field2Description',
    'Clarified, smooth and gently cleansed',
  ),
  ingredientText: text(
    'ingredientText',
    'Water (Aqua), Kaolin, Aloe Barbadensis Leaf Juice, Bentonite, Alcohol Denat., Glycerin, Illite, Phenoxyethanol, Lavandula Angustifolia (Lavender) Oil, Oenothera Biennis (Evening Primrose) Oil, Rosa Canina Fruit Oil, Linalool, Ormenis Multicaulis Oil, Limonene, Carum Petroselinum (Parsley) Seed Oil, Geraniol',
  ),
  variants: [
    {
      description: text(
        'variants.description',
        'A clarifying formulation that removes surface impurities and offers mild exfoliation from Lactic Acid. Ideal for maintaining immaculately clean skin in polluted urban environments.',
      ),
      image: {
        altText: 'here is a descriptive alt tag',
        sizes: [
          {
            viewport: 'LARGE',
            src:
              '/images/products/Skin_Amazing_Face_Cleanser_100mL_large.png 2x',
          },
          {
            viewport: 'MEDIUM',
            src:
              '/images/products/Skin_Amazing_Face_Cleanser_100mL_medium.png 2x',
          },
          {
            viewport: 'SMALL',
            src:
              '/images/products/Skin_Amazing_Face_Cleanser_100mL_small.png 2x',
          },
        ],
      },
      isDefault: true,
      keyIngredient: text(
        'variants.keyIngredient',
        'Licorice Root, Lactic Acid, Blackcurrant Seed',
      ),
      price: text('variants.price', '$43.00'),
      size: text('variants.size', '100 mL'),
      sku: text('variants.sku', 'SK45'),
    },
  ],
};

storiesOf('Layouts.PDPHeader', module).add('Base component', () => (
  <ApolloProvider client={client}>
    <ProductContext.Provider value={product}>
      <PDPHeader />
    </ProductContext.Provider>
  </ApolloProvider>
));
