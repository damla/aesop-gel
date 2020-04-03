import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Breadcrumbs from './Breadcrumbs';

configure({ adapter: new Adapter() });

describe('<Breadcrumbs />', () => {
  it('should be defined', () => {
    expect(Breadcrumbs).toBeDefined();
  });

  const tree = renderer.create(<Breadcrumbs items={[]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
