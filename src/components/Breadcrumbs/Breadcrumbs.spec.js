import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import BreadcrumbsFixture from './Breadcrumbs.fixture';
import Breadcrumbs from './Breadcrumbs';

configure({ adapter: new Adapter() });

describe('<Breadcrumbs />', () => {
  it('should be defined', () => {
    expect(Breadcrumbs).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Breadcrumbs
          items={BreadcrumbsFixture.items}
          theme={BreadcrumbsFixture.theme}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
