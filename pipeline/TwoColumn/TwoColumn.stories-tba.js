import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import TwoColumn from './TwoColumn';

storiesOf('TwoColumn', module).add('base component', () => (
  <div className="story-container">
    <TwoColumn
      addExtraVerticalPadding={true}
      id="philosophy-body"
      main={{
        id: 'facial-apt-first-body-right',
        type: 'componentBodyCopy',
        // fields: {
        //   id: 'philosophy-1',
        //   eyebrow: 'the aesop team',
        //   copy: 'This is our team',
        // },
      }}
      sidebar={{
        id: 'philosophy-body-sidebar',
        type: 'componentBodyCopy',
        // fields: {
        //   id: 'philosophy-1',
        //   eyebrow: 'the aesop team',
        //   title: 'Get to know us better',
        // },
      }}
    />
    <pre>
      <code>{`<TwoColumn />`}</code>
    </pre>
  </div>
));
