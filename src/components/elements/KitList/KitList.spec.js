import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import KitList from './KitList';
import KitListFixture from './KitList.fixture';

configure({ adapter: new Adapter() });

describe('<KitList />', () => {
  it('should be defined', () => {
    expect(KitList).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<KitList items={KitListFixture.items} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
