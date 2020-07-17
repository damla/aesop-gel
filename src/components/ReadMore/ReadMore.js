import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContentHubArticle from '~/components/ContentHubArticle';
import Transition from '~/components/Transition';
import styles from './ReadMore.module.css';
import { ascertainIsSmallOrMediumOnlyViewport } from '~/utils/viewports';

const ReadMore = forwardRef(function ReadMoreRef({ articles, className }) {
  const classSet = cx(styles.base, className);

  return (
    <Transition isActiveOnMount={true} type="fade">
      <div className={!ascertainIsSmallOrMediumOnlyViewport() && classSet}>
        {articles.map(article => (
          <ContentHubArticle
            category={article.category}
            copy={article.copy}
            horizontalThumbnail={article.horizontalThumbnail}
            id={article.id}
            isHorizontal={true}
            isReadMore={true}
            key={article.id}
            title={article.title}
            url={article.url}
            verticalThumbnail={article.verticalThumbnail}
          />
        ))}
      </div>
    </Transition>
  );
});

ReadMore.propTypes = {
  articles: PropTypes.array,
  className: PropTypes.string,
};

ReadMore.defaultProps = {
  articles: undefined,
  className: undefined,
};

export default ReadMore;
