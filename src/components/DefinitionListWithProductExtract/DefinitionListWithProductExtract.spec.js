import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DefinitionListWithProductExtract from './DefinitionListWithProductExtract';

configure({ adapter: new Adapter() });

describe('<DefinitionListWithProductExtract />', () => {
  it('should be defined', () => {
    expect(DefinitionListWithProductExtract).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<DefinitionListWithProductExtract />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
