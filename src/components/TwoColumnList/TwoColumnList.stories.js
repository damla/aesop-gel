import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import TwoColumnList from './TwoColumnList';

storiesOf('TwoColumnList', module).add('Base component', () => (
  <TwoColumnList
    leftColumn={object('leftColumn', [
      {
        id: '1',
        primaryTitle: 'Title 1',
        subTitle: 'Sub title 1',
        subItemLinks: [
          {
            id: '1',
            text: 'About',
            url: 'https://www.aesop.com/au/r/about',
          },
          {
            id: '2',
            text: 'About 2',
            url: 'https://www.aesop.com/au/r/about',
          },
        ],
      },
      {
        id: '2',
        primaryTitle: 'Title 2',
        subTitle: 'Sub title 2',
        subItemLinks: [
          {
            id: '1',
            text: 'Philosophy',
            url: 'https://www.aesop.com/au/r/philosophy-to-products',
          },
        ],
      },
    ])}
    rightColumn={object('rightColumn', [
      {
        id: '1',
        primaryTitle: 'Title 1',
        subTitle: 'Sub title 1',
        subItemLinks: [
          {
            id: '1',
            text: 'About',
            url: 'https://www.aesop.com/au/r/about',
          },
          {
            id: '2',
            text: 'About 2',
            url: 'https://www.aesop.com/au/r/about',
          },
        ],
      },
    ])}
  />
));
