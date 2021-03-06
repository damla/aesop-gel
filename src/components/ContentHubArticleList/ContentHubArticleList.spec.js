import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ContentHubArticleList from './ContentHubArticleList';
import ContentHubArticleListFixture from './ContentHubArticleList.fixture';

configure({ adapter: new Adapter() });

describe('<ContentHubArticleList />', () => {
  it('should be defined', () => {
    expect(ContentHubArticleList).toBeDefined();
  });

  it('renders base component correctly with pattern 1', () => {
    const tree = renderer
      .create(
        <ContentHubArticleList
          articles={ContentHubArticleListFixture.articles}
          pattern={1}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders base component correctly with pattern 0', () => {
    const tree = renderer
      .create(
        <ContentHubArticleList
          articles={ContentHubArticleListFixture.articles}
          isFirstGroup={true}
          pattern={0}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
