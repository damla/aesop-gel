import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ReadMore from './ReadMore';
import ReadMoreFixture from './ReadMore.fixture';

configure({ adapter: new Adapter() });

describe('<ReadMore />', () => {
  it('should be defined', () => {
    expect(ReadMore).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<ReadMore articles={ReadMoreFixture.articles} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
