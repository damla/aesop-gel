import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import Button from './Button';

const base = storiesOf('Elements.Button', module);

base.add('Base component', () => (
  <Button
    alternate={boolean('alternate', false)}
    href={text('href', '')}
    icon={boolean('icon', false)}
    inline={boolean('inline', false)}
    target={text('target', '_self')}
    title={text('title', 'Aēsop')}
    to={text('to', 'about')}
  >
    {text('children', 'Button')}
  </Button>
));

const variations = storiesOf('Elements.Button.Variations', module);

variations.add(
  'Disabled',
  () => (
    <Button disabled={true} onClick={action('clicked')} title="Aēsop">
      Disabled Button
    </Button>
  ),
  {
    info: {
      text: `The \`disable\` prop can only be applied to buttons with a \`onClick\` prop.`,
    },
  },
);

variations.add('Alternate', () => (
  <Button alternate={true} onClick={action('clicked')} title="Aēsop">
    Alternate Button
  </Button>
));

variations.add(
  'Disabled alternate',
  () => (
    <Button
      alternate={true}
      disabled={true}
      onClick={action('clicked')}
      title="Aēsop"
    >
      Disabled Alternate Button
    </Button>
  ),
  {
    info: {
      text: `The \`disable\` prop can only be applied to buttons with a \`onClick\` prop.`,
    },
  },
);

variations.add('Internal link', () => (
  <Button title="Aēsop" to="/about">
    Internal Link
  </Button>
));

variations.add('External link', () => (
  <Button href="http://aesop.com" title="Aēsop">
    External Link
  </Button>
));

variations.add('Inline button', () => (
  <Button inline={true} onClick={action('clicked')} title="Aēsop">
    Inline Button
  </Button>
));

variations.add('Inline internal link with icon', () => (
  <Button icon={true} inline={true} title="Aēsop" to="/about">
    Inline Internal Link with Icon
  </Button>
));

variations.add('Inline external link with icon', () => (
  <Button href="http://aesop.com" icon={true} inline={true} title="Aēsop">
    Inline External Link with Icon
  </Button>
));

variations.add('Internal link with icon', () => (
  <Button icon={true} title="Aēsop" to="/about">
    Internal Link with Icon
  </Button>
));

variations.add('External link with icon', () => (
  <Button href="http://aesop.com" icon={true} title="Aēsop">
    External Link with Icon
  </Button>
));

variations.add('Alternate internal link with icon', () => (
  <Button alternate={true} icon={true} title="Aēsop" to="/about">
    Alternate internal link with icon
  </Button>
));

variations.add('Alternate external link with icon', () => (
  <Button alternate={true} href="http://aesop.com" icon={true} title="Aēsop">
    Alternate external link with icon
  </Button>
));
