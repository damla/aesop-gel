import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Figure from './Figure';
import Image from '~/components/Image';

storiesOf('Figure', module).add('Base component', () => (
  <Figure caption={text('caption', 'About Aesop')} id={text('id', 'aesop')}>
    <Image
      altText={text('altText', 'Image of Milk Cleansing Campaign Aesop 2019')}
      large={text(
        'large',
        'https://www.aesop.com/medias/GelCleanser-640x640.png?context=bWFzdGVyfGltYWdlc3w1MzE5NTl8aW1hZ2UvcG5nfGltYWdlcy9oOTUvaGNkLzg4MDc3OTc4NTAxNDIucG5nfGM3NTNhYjdkMWNiOTRhNWZhNDA0NWExZWJiODMxN2VhNzEyY2ZkNGUyYzc4ZWVkZDRjYTIzMzZmZTRlOGYxNjM',
      )}
    />
  </Figure>
));
