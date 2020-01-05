import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RadioGroup from './RadioGroup';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<RadioGroup />', () => {
  it('should be defined', () => {
    expect(RadioGroup).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <RadioGroup
          errorMessage="This is an error message"
          name="radio"
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
          testReference="radio"
          value="fabulist"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
