import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from './Button';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<Button />', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('renders base component correctly with `onClick` prop', () => {
    const tree = renderer
      .create(
        <Button className="aesop" onClick={mockFn} title="Aēsop">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
