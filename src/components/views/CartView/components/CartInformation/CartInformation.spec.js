import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CartInformation from './CartInformation';

configure({ adapter: new Adapter() });

describe('<CartInformation />', () => {
  it('should be defined', () => {
    expect(CartInformation).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<CartInformation />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
