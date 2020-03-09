import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import Video from './Video';

storiesOf('Video', module).add('Base component', () => (
  <Video
    autoplay={boolean('autoplay', false)}
    id={text('id', 'video')}
    large={text(
      'large',
      'https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174',
    )}
    loop={boolean('loop', true)}
  />
));
