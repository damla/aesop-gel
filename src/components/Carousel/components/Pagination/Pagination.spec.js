import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

configure({ adapter: new Adapter() });

describe('<Carousel.Pagination />', () => {
  it('should be defined', () => {
    expect(Pagination).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Pagination dots={[0]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('returns null if dots array was empty', () => {
    const component = shallow(<Pagination />);
    expect(component.type()).toEqual(null);
  });
});
