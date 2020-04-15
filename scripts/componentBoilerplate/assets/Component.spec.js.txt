import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ComponentBoilerplate from './ComponentBoilerplate';
import ComponentBoilerplateFixture from './ComponentBoilerplate.fixture';

configure({ adapter: new Adapter() });

describe('<ComponentBoilerplate />', () => {
  it('should be defined', () => {
    expect(ComponentBoilerplate).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<ComponentBoilerplate />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
