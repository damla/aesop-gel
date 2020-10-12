import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

configure({ adapter: new Adapter() });

describe('<Checkbox />', () => {
  it('should be defined', () => {
    expect(Checkbox).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Checkbox
          content="Subscribe to communications about Aesop products, services, stores, events and matters of cultural interest."
          dataTestRef="test-data-ref"
          id="test-checkbox"
          isEnabled={false}
          theme="dark"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
