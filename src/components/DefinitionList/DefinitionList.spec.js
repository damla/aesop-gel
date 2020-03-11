import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DefinitionList from './DefinitionList';
import DefinitionListFixture from './DefinitionList.fixture';

configure({ adapter: new Adapter() });

jest.mock('uuid/v4', () => {
  let value = 0;
  return () => value++;
});

describe('<DefinitionList />', () => {
  it('should be defined', () => {
    expect(DefinitionList).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<DefinitionList items={DefinitionListFixture.items} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('returns null items prop is not a populated array', () => {
    const component = shallow(<DefinitionList items={[]} />);
    expect(component.type()).toEqual(null);
  });
});
