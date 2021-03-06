import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Loading from './Loading';

configure({ adapter: new Adapter() });

describe('<Loading />', () => {
  it('should be defined', () => {
    expect(Loading).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Loading isLoading={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
