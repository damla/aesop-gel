import React, { forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContentHubArticle from '~/components/ContentHubArticle';
import Transition from '~/components/Transition';
import styles from './ContentHubArticleList.module.css';
import { ascertainIsSmallOnlyViewport } from '~/utils/viewports';

const ContentHubArticleList = forwardRef(function ContentHubArticleListRef({
  articles,
  className,
  pattern, // 0 means first image is horizontal
}) {
  const classSet = cx(styles.base, className);
  const topLeftClassSet = cx(styles[`topLeft-${pattern}`], styles[`article`]);
  const topRightClassSet = cx(styles[`topRight-${pattern}`], styles[`article`]);
  const bottomLeftClassSet = cx(
    styles[`bottomLeft-${pattern}`],
    styles[`article`],
  );
  const bottomRightClassSet = cx(
    styles[`bottomRight-${pattern}`],
    styles[`article`],
  );
  const count = articles && articles.length;

  return (
    <section>
      <Fragment>
        {ascertainIsSmallOnlyViewport() ? (
          articles.map(article => (
            <ContentHubArticle
              category={article.category}
              copy={article.copy}
              horizontalThumbnail={article.horizontalThumbnail}
              id={article.id}
              isHorizontal={true}
              key={article.id}
              title={article.title}
              url={article.url}
              verticalThumbnail={article.verticalThumbnail}
            />
          ))
        ) : (
          <div className={classSet}>
            <div className={topLeftClassSet}>
              {count >= 3 && (
                <ContentHubArticle
                  category={articles[0].category}
                  copy={articles[0].copy}
                  horizontalThumbnail={articles[0].horizontalThumbnail}
                  id={articles[0].id}
                  isHorizontal={!pattern}
                  key={articles[0].id}
                  title={articles[0].title}
                  url={articles[0].url}
                  verticalThumbnail={articles[0].verticalThumbnail}
                />
              )}
            </div>
            <div className={topRightClassSet}>
              {count >= 4 && (
                <ContentHubArticle
                  category={articles[1].category}
                  copy={articles[1].copy}
                  horizontalThumbnail={articles[1].horizontalThumbnail}
                  id={articles[1].id}
                  isHorizontal={pattern}
                  key={articles[1].id}
                  title={articles[1].title}
                  url={articles[1].url}
                  verticalThumbnail={articles[1].verticalThumbnail}
                />
              )}
            </div>
            <div className={bottomLeftClassSet}>
              {count >= 1 && (
                <ContentHubArticle
                  category={(articles[count - 2] || articles[0]).category}
                  copy={(articles[count - 2] || articles[0]).copy}
                  horizontalThumbnail={
                    (articles[count - 2] || articles[0]).horizontalThumbnail
                  }
                  id={(articles[count - 2] || articles[0]).id}
                  isHorizontal={pattern}
                  title={(articles[count - 2] || articles[0]).title}
                  url={(articles[count - 2] || articles[0]).url}
                  verticalThumbnail={
                    (articles[count - 2] || articles[0]).verticalThumbnail
                  }
                />
              )}
            </div>
            <div className={bottomRightClassSet}>
              {count >= 2 && (
                <ContentHubArticle
                  category={
                    articles[count - 1]
                      ? articles[count - 1].category
                      : articles[1].category
                  }
                  copy={
                    articles[count - 1]
                      ? articles[count - 1].copy
                      : articles[1].copy
                  }
                  horizontalThumbnail={
                    articles[count - 1]
                      ? articles[count - 1].horizontalThumbnail
                      : articles[1].horizontalThumbnail
                  }
                  id={
                    articles[count - 1]
                      ? articles[count - 1].id
                      : articles[1].id
                  }
                  isHorizontal={!pattern}
                  title={
                    articles[count - 1]
                      ? articles[count - 1].title
                      : articles[1].title
                  }
                  url={
                    articles[count - 1]
                      ? articles[count - 1].url
                      : articles[1].url
                  }
                  verticalThumbnail={
                    articles[count - 1]
                      ? articles[count - 1].verticalThumbnail
                      : articles[1].verticalThumbnail
                  }
                />
              )}
            </div>
          </div>
        )}
      </Fragment>
    </section>
  );
});

ContentHubArticleList.propTypes = {
  articles: PropTypes.array,
  className: PropTypes.string,
  pattern: PropTypes.oneOf([0, 1]),
};

ContentHubArticleList.defaultProps = {
  articles: undefined,
  className: undefined,
  pattern: 0,
};

export default ContentHubArticleList;
