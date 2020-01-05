import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Quote from './Quote';
import QuoteFixture from './Quote.fixture';

configure({ adapter: new Adapter() });

describe('<Quote />', () => {
  it('should be defined', () => {
    expect(Quote).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Quote author={QuoteFixture.author}>{QuoteFixture.content}</Quote>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
