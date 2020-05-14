import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Hidden from './Hidden';

configure({ adapter: new Adapter() });

describe('<Hidden />', () => {
  it('should be defined', () => {
    expect(Hidden).toBeDefined();
  });

  it('renders returned component correctly', () => {
    const tree = renderer
      .create(
        <Hidden isSmall={true}>
          <span>Hidden content</span>
        </Hidden>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
