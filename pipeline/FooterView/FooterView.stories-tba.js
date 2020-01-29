import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import 'normalize.css';

import '~/styles/base.module.css';
import '~.storybook/storybook.module.css';
import FooterView from './FooterView';
import FooterViewFixture from './FooterView.fixture';

const store = new Store({
  value: '',
});

storiesOf('Footer', module).add(
  'Base component',
  () => (
    <State store={store}>
      <FooterView
        siteNavigationPrimary={{
          links: object('siteNavigationPrimary_links', [
            {
              text: FooterViewFixture.siteNavigationPrimary.links[0].text,
              id: FooterViewFixture.siteNavigationPrimary.links[0].id,
              url: FooterViewFixture.siteNavigationPrimary.links[0].url,
              style: FooterViewFixture.siteNavigationPrimary.links[0].style,
            },
          ]),
          title: text(
            'siteNavigationPrimary_title',
            FooterViewFixture.siteNavigationPrimary.title,
          ),
        }}
        siteNavigationSecondary={{
          links: object('siteNavigationSecondary_links', [
            {
              text: FooterViewFixture.siteNavigationSecondary.links[0].text,
              id: FooterViewFixture.siteNavigationSecondary.links[0].id,
              url: FooterViewFixture.siteNavigationSecondary.links[0].url,
              style: FooterViewFixture.siteNavigationSecondary.links[0].style,
            },
          ]),
          title: text(
            'siteNavigationSecondary_title',
            FooterViewFixture.siteNavigationSecondary.title,
          ),
        }}
        siteNavigationTernary={{
          links: object('siteNavigationTernary_links', [
            {
              text: FooterViewFixture.siteNavigationTernary.links[0].text,
              id: FooterViewFixture.siteNavigationTernary.links[0].id,
              url: FooterViewFixture.siteNavigationTernary.links[0].url,
              style: FooterViewFixture.siteNavigationTernary.links[0].style,
            },
          ]),
          title: text(
            'siteNavigationTernary_title',
            FooterViewFixture.siteNavigationTernary.title,
          ),
        }}
      />
    </State>
  ),
  {
    info: {
      text: '<State /> Component is used for demonstarion only',
    },
  },
);
