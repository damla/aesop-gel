import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SecondaryMessage from './SecondaryMessage';
import SecondaryMessageFixture from './SecondaryMessage.fixture';

configure({ adapter: new Adapter() });

describe('<SecondaryMessage />', () => {
  it('should be defined', () => {
    expect(SecondaryMessage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<SecondaryMessage {...SecondaryMessageFixture} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
