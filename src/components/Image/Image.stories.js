import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Image from './Image';

const base = storiesOf('Image', module);

base.add('Base component', () => (
  <Image
    altText={text('altText', 'Image of Milk Cleansing Campaign Aesop 2019')}
    cta={{
      url: text(
        'hyperlink.url',
        'https://www.aesop.com/au/r/philosophy-to-products',
      ),
    }}
    large={text(
      'large',
      'https://www.aesop.com/medias/GelCleanser-640x640.png?context=bWFzdGVyfGltYWdlc3w1MzE5NTl8aW1hZ2UvcG5nfGltYWdlcy9oOTUvaGNkLzg4MDc3OTc4NTAxNDIucG5nfGM3NTNhYjdkMWNiOTRhNWZhNDA0NWExZWJiODMxN2VhNzEyY2ZkNGUyYzc4ZWVkZDRjYTIzMzZmZTRlOGYxNjM',
    )}
    medium={text(
      'medium',
      'https://www.aesop.com/medias/GelCleanser-640x640.png?context=bWFzdGVyfGltYWdlc3w1MzE5NTl8aW1hZ2UvcG5nfGltYWdlcy9oOTUvaGNkLzg4MDc3OTc4NTAxNDIucG5nfGM3NTNhYjdkMWNiOTRhNWZhNDA0NWExZWJiODMxN2VhNzEyY2ZkNGUyYzc4ZWVkZDRjYTIzMzZmZTRlOGYxNjM',
    )}
    small={text(
      'small',
      'https://www.aesop.com/medias/GelCleanser-640x640.png?context=bWFzdGVyfGltYWdlc3w1MzE5NTl8aW1hZ2UvcG5nfGltYWdlcy9oOTUvaGNkLzg4MDc3OTc4NTAxNDIucG5nfGM3NTNhYjdkMWNiOTRhNWZhNDA0NWExZWJiODMxN2VhNzEyY2ZkNGUyYzc4ZWVkZDRjYTIzMzZmZTRlOGYxNjM',
    )}
  />
));
