import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import '~.storybook/storybook.module.css';
import Video from './Video';

storiesOf('Video', module).add('Base component', () => (
  <Video
    hasAllowAudio={boolean('hasAllowAudio', false)}
    hasAutoplay={boolean('hasAutoplay', false)}
    hasLoop={boolean('hasLoop', false)}
    hasPlayInFullScreen={boolean('hasPlayInFullScreen', false)}
    id={text('id', 'video')}
    large={text(
      'large',
      'https://vod-progressive.akamaized.net/exp=1584669254~acl=%2A%2F754253722.mp4%2A~hmac=97b2fb43fab85fd2566b344edefbc90c5bbb5c1dcc15d8b4eecf708f7c2621f6/vimeo-prod-skyfire-std-us/01/3541/8/217705290/754253722.mp4',
    )}
    poster={{
      altText: 'How to Use Video for Tea Tree Leaf Facial Exfoliant',
      fullBleedImage: boolean('poster.fullBleedImage', false),
      large:
        'https://www.aesop.com/medias/TTFC-1440x1800.png?context=bWFzdGVyfGltYWdlc3wxODA2OTU1fGltYWdlL3BuZ3xpbWFnZXMvaGNlL2gzNi84ODYzODE3NDMzMTE4LnBuZ3w2ZTliZTlkZWY3ZDZjNzE3ZWNjZGVmMDI4ZTY3NWU5M2M2NTg2Y2Q1ZTIzMTQzY2I1NTcwZjFmMzdmYzIyZmNj',
      medium:
        'https://www.aesop.com/medias/TTFC-1536x864.png?context=bWFzdGVyfGltYWdlc3wxMjY0NjE1fGltYWdlL3BuZ3xpbWFnZXMvaDY2L2hlOS84ODYzODE3NDk4NjU0LnBuZ3wyMzAwNGE0OWI0ZDVkN2E0MjQ1NDk4Yzc4MmYwMjkwNDE0MzI3NWQ3NjkzYzc0ZjA1MzRiNDY3MzBmYTAyMWUz',
      small:
        'https://www.aesop.com/medias/TTFC-640x640.png?context=bWFzdGVyfGltYWdlc3w1MDY0NDB8aW1hZ2UvcG5nfGltYWdlcy9oNDgvaDc4Lzg4MDc3ODk1NTk4MzgucG5nfDBlOGVlODMwZDlkNWM0ZWY5ZjZkZjYyZDdhMDNjZGY0ZjMwZWNmZWU4OTI2MTY1NzhmZTU0NjUwMDkxMDUzNjQ',
    }}
  />
));
