import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import PDPHeader from './PDPHeader';
// import { ProductContext } from '~/components/contexts/ProductContext/ProductContext';

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
              'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ 2x',
          },
          {
            viewport: 'MEDIUM',
            src:
              'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ 2x',
          },
          {
            viewport: 'SMALL',
            src:
              'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ 2x',
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
  <PDPHeader product={product} />
));
