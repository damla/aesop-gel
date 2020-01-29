import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Select from './Select';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<Select />', () => {
  it('should be defined', () => {
    expect(Select).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Select
          errorMessage="This is an error message"
          label="Select label"
          name="selectName"
          onChange={mockFn}
          onFocus={mockFn}
          options={[
            {
              value: 'fabulist',
              label: 'Fabulist',
            },
            {
              value: 'ledger',
              label: 'Ledger',
            },
          ]}
          testReference="select"
          value="select"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
