import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import FlyinPanel from './FlyinPanel';

configure({ adapter: new Adapter() });

jest.mock('uuid/v4', () => {
  let value = 0;
  return () => value++;
});

const mockFn = jest.fn();

describe('<FlyinPanel />', () => {
  it('should be defined', () => {
    expect(FlyinPanel).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <FlyinPanel handleClose={mockFn} title="title">
          Content
        </FlyinPanel>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
