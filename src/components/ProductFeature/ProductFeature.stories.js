import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import ProductFeature from './ProductFeature';

storiesOf('ProductFeature', module).add('Base component', () => (
  <ProductFeature
    image={{
      altText: text(
        'image.altText',
        'Image of Parsley Seed Anti-Oxidant Eye Cream',
      ),
      id: text(
        'image.id',
        'https://release.aesop-web-ui.aesopdigital.io/images/square/large/item-1.jpg 2x',
      ),
      large: text(
        'image.large',
        'https://release.aesop-web-ui.aesopdigital.io/images/square/large/item-1.jpg 2x',
      ),
    }}
    productDetails={{
      name: text('productDetails.name', 'Parsley Seed Anti-Oxidant Eye Cream'),
      priceDetails: text('productDetails.priceDetails', '0.3 fl oz. / $87'),
    }}
  />
));
