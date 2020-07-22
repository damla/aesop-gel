import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Transition from '~/components/Transition';
import Image from '~/components/Image';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import styles from './ContentHubArticle.module.css';
import { useOnScreen } from '~/customHooks/useOnScreen';

const ContentHubArticle = forwardRef(function ContentHubArticleRef({
  id,
  verticalThumbnail,
  horizontalThumbnail,
  isHorizontal, // use horizontal or vertical thumbnail
  isReadMore, // if it's displayed in ReadMore section
  isMenuItem, // if it's displayed in Read Menu Navigation
  title,
  readingTime,
  category,
  className,
  uri,
}) {
  const classSet = cx(styles.base, className);

  const categoryClassSet = cx(styles.category);

  const titleClassSet = cx(styles.title, styles.link);

  const noteClassSet = cx(styles.note);

  const currentImage = isHorizontal ? horizontalThumbnail : verticalThumbnail;

  const imageClassSet = cx(styles.link);

  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, 0.4);

  return (
    <Transition isActive={isOnScreen} type="fade">
      <div className={classSet} id={id} ref={ref}>
        {isReadMore && !isMenuItem && (
          <Hyperlink
            className={imageClassSet}
            title={`Link to ${title}`}
            url={uri}
          >
            <Image
              altText={currentImage.altText}
              className={styles.image}
              large={currentImage.large}
              medium={currentImage.medium}
              small={currentImage.small}
            />
          </Hyperlink>
        )}
        {!isMenuItem && (
          <Heading className={categoryClassSet} level={'3'} size="xSmall">
            {category}
          </Heading>
        )}
        <Hyperlink title={`Link to ${title}`} url={uri}>
          <span className={titleClassSet}>{title}</span>
        </Hyperlink>
        {readingTime && (
          <Heading className={noteClassSet} level={'3'} size="xSmall">
            {readingTime}
          </Heading>
        )}

        {!isReadMore && !isMenuItem && (
          <Hyperlink
            className={imageClassSet}
            title={`Link to ${title}`}
            url={uri}
          >
            <Image
              altText={currentImage.altText}
              className={styles.image}
              large={currentImage.large}
              medium={currentImage.medium}
              small={currentImage.small}
            />
          </Hyperlink>
        )}
      </div>
    </Transition>
  );
});

ContentHubArticle.propTypes = {
  id: PropTypes.string,
  verticalThumbnail: PropTypes.object,
  horizontalThumbnail: PropTypes.object,
  isHorizontal: PropTypes.bool,
  isReadMore: PropTypes.bool,
  isMenuItem: PropTypes.bool,
  title: PropTypes.string,
  readingTime: PropTypes.string,
  category: PropTypes.string,
  className: PropTypes.string,
  uri: PropTypes.string,
};

ContentHubArticle.defaultProps = {
  id: undefined,
  verticalThumbnail: undefined,
  horizontalThumbnail: undefined,
  isHorizontal: undefined,
  isReadMore: false,
  isMenuItem: false,
  title: undefined,
  readingTime: undefined,
  category: undefined,
  className: undefined,
  uri: undefined,
};

export default ContentHubArticle;
