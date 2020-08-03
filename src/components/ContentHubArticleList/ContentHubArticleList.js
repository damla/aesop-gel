import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContentHubArticle from '~/components/ContentHubArticle';
import styles from './ContentHubArticleList.module.css';

const ContentHubArticleList = ({
  articles,
  className,
  pattern, // 0 means first image is horizontal
}) => {
  const classSet = cx(styles.base, className);
  const topLeftClassSet = cx(styles[`top-left-${pattern}`], styles[`article`]);
  const topRightClassSet = cx(
    styles[`top-right-${pattern}`],
    styles[`article`],
  );
  const bottomLeftClassSet = cx(
    styles[`bottom-left-${pattern}`],
    styles[`article`],
  );
  const bottomRightClassSet = cx(
    styles[`bottom-right-${pattern}`],
    styles[`article`],
  );
  const count = articles && articles.length;

  return (
    <section>
      <Fragment>
        <div className={classSet}>
          <div className={topLeftClassSet}>
            {count >= 3 && (
              <ContentHubArticle
                category={articles[0].category}
                dataTestRef={articles[0].id}
                horizontalThumbnail={articles[0].horizontalThumbnail}
                id={articles[0].id}
                isHorizontal={Boolean(!pattern)}
                key={articles[0].id}
                longTitle={articles[0].longTitle}
                readingTime={articles[0].readingTime}
                uri={articles[0].uri}
                verticalThumbnail={articles[0].verticalThumbnail}
              />
            )}
          </div>
          <div className={topRightClassSet}>
            {count >= 4 && (
              <ContentHubArticle
                category={articles[1].category}
                dataTestRef={articles[1].id}
                horizontalThumbnail={articles[1].horizontalThumbnail}
                id={articles[1].id}
                isHorizontal={Boolean(pattern)}
                key={articles[1].id}
                longTitle={articles[1].longTitle}
                readingTime={articles[1].readingTime}
                uri={articles[1].uri}
                verticalThumbnail={articles[1].verticalThumbnail}
              />
            )}
          </div>
          <div className={bottomLeftClassSet}>
            {count >= 1 && (
              <ContentHubArticle
                category={(articles[count - 2] || articles[0]).category}
                dataTestRef={(articles[count - 2] || articles[0]).id}
                horizontalThumbnail={
                  (articles[count - 2] || articles[0]).horizontalThumbnail
                }
                id={(articles[count - 2] || articles[0]).id}
                isHorizontal={Boolean(pattern)}
                longTitle={(articles[count - 2] || articles[0]).longTitle}
                readingTime={(articles[count - 2] || articles[0]).readingTime}
                uri={(articles[count - 2] || articles[0]).uri}
                verticalThumbnail={
                  (articles[count - 2] || articles[0]).verticalThumbnail
                }
              />
            )}
          </div>
          <div className={bottomRightClassSet}>
            {count >= 2 && (
              <ContentHubArticle
                category={(articles[count - 1] || articles[1]).category}
                dataTestRef={(articles[count - 1] || articles[1]).id}
                horizontalThumbnail={
                  (articles[count - 1] || articles[1]).horizontalThumbnail
                }
                id={(articles[count - 1] || articles[1]).id}
                isHorizontal={Boolean(!pattern)}
                longTitle={(articles[count - 1] || articles[1]).longTitle}
                readingTime={(articles[count - 1] || articles[1]).readingTime}
                uri={(articles[count - 1] || articles[1]).uri}
                verticalThumbnail={
                  (articles[count - 1] || articles[1]).verticalThumbnail
                }
              />
            )}
          </div>
        </div>
      </Fragment>
    </section>
  );
};

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
