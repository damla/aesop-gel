import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ContentHubArticle from './ContentHubArticle';
import ContentHubArticleFixture from './ContentHubArticle.fixture';

configure({ adapter: new Adapter() });

describe('<ContentHubArticle />', () => {
  it('should be defined', () => {
    expect(ContentHubArticle).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ContentHubArticle
          category={ContentHubArticleFixture.category}
          dataTestRef={ContentHubArticleFixture.dataTestRef}
          horizontalThumbnail={ContentHubArticleFixture.horizontalThumbnail}
          id={ContentHubArticleFixture.id}
          isHorizontal={true}
          isInFirstGroup={true}
          isMenuItem={false}
          isReadMore={false}
          longTitle={ContentHubArticleFixture.longTitle}
          readingTime={ContentHubArticleFixture.readingTime}
          uri={ContentHubArticleFixture.uri}
          verticalThumbnail={ContentHubArticleFixture.verticalThumbnail}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
