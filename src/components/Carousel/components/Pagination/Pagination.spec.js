import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

configure({ adapter: new Adapter() });

describe('<Carousel.Pagination />', () => {
  it('should be defined', () => {
    expect(Pagination).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Pagination dots={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
