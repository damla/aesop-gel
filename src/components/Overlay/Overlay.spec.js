import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Overlay from './Overlay';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<Overlay />', () => {
  it('should be defined', () => {
    expect(Overlay).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<Overlay isVisible={true} onClose={mockFn} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
