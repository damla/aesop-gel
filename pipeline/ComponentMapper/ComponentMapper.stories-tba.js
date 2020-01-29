import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';

import ComponentMapping from './ComponentMapper';

storiesOf('ComponentMapping', module).add('base component', () => (
  <div className="story-container">
    <ComponentMapping
      componentType="componentBodyCopy"
      fields={{
        id: 'Anti-oxidant',
        primaryTitle: 'Aesop & The Paris Review: A Partnership Extended',
        quote:
          'Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream.',
        secondaryTitle: 'Active Nutrients',
      }}
      id="phylosophy-body"
    />
    <pre>
      <code>{`<ComponentMapper id="phylosophy-body" componentType="componentBodyCopy" fields={fields} />`}</code>
    </pre>
  </div>
));
