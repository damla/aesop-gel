import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import PDPDetailsImage from './PDPDetailsImage';

const image = {
  altText: text('altText', 'here is a descriptive alt tag'),
  sizes: [
    {
      viewport: 'LARGE',
      src: text(
        'sizes_viewport_LARGE_src',
        '/images/products/Skin_Amazing_Face_Cleanser_100mL_large.png 2x',
      ),
    },
    {
      viewport: 'MEDIUM',
      src: text(
        'sizes_viewport_MEDIUM_src',
        '/images/products/Skin_Amazing_Face_Cleanser_100mL_medium.png 2x',
      ),
    },
    {
      viewport: 'SMALL',
      src: text(
        'sizes_viewport_SMALL_src',
        '/images/products/Skin_Amazing_Face_Cleanser_100mL_small.png 2x',
      ),
    },
  ],
};

storiesOf('PDPDetailsImage', module).add('Base component', () => (
  <PDPDetailsImage
    id="PDPDetailsImage"
    image={image}
    onVariantChange={() => false}
    selectedOption="aesop"
    variantOptions={[{ size: '100ml', sku: 'aesop' }]}
  />
));
