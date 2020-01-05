import React from 'react';
import renderer from 'react-test-renderer';
import FormRow from './FormRow';

describe('<FormRow />', () => {
  it('should be defined', () => {
    expect(FormRow).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <FormRow>
          <input name="password" type="password" />
        </FormRow>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
