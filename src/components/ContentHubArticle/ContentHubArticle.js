import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks/useOnScreen';
import Image from '~/components/Image';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Transition from '~/components/Transition';
import styles from './ContentHubArticle.module.css';

const ContentHubArticle = forwardRef(function ContentHubArticleRef({
  category,
  className,
  horizontalThumbnail,
  id,
  isHorizontal, // use horizontal or vertical thumbnail
  isMenuItem, // if it's displayed in Read Menu Navigation
  isReadMore, // if it's displayed in ReadMore section
  readingTime,
  title,
  uri,
  verticalThumbnail,
}) {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, 0.4);
  const currentImage = isHorizontal ? horizontalThumbnail : verticalThumbnail;
  const classSet = cx(styles.base, className);
  const categoryClassSet = cx(styles.category);
  const imageClassSet = cx(styles.link);
  const nonMobileImageClassSet = cx(styles.link, styles[`non-mobile`]);
  const noteClassSet = cx(styles.note);
  const mobileImageClassSet = cx(styles.link, styles[`mobile`]);
  const titleClassSet = cx(styles.title, styles.link);

  return (
    <Transition isActive={isOnScreen} type="fade">
      <div className={classSet} id={id} ref={ref}>
        {isReadMore && !isMenuItem && (
          <Hyperlink className={imageClassSet} title={title} url={uri}>
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
          <Heading className={categoryClassSet} level="3" size="xSmall">
            {category}
          </Heading>
        )}
        <Hyperlink title={title} url={uri}>
          <span className={titleClassSet}>{title}</span>
        </Hyperlink>
        {readingTime && (
          <Heading className={noteClassSet} level="3" size="xSmall">
            {readingTime}
          </Heading>
        )}

        {!isReadMore && !isMenuItem && (
          <Hyperlink className={nonMobileImageClassSet} title={title} url={uri}>
            <Image
              altText={currentImage.altText}
              className={styles.image}
              large={currentImage.large}
              medium={currentImage.medium}
              small={currentImage.small}
            />
          </Hyperlink>
        )}
        {!isReadMore && !isMenuItem && (
          <Hyperlink className={mobileImageClassSet} title={title} url={uri}>
            <Image
              altText={horizontalThumbnail.altText}
              className={styles.image}
              large={horizontalThumbnail.large}
              medium={horizontalThumbnail.medium}
              small={horizontalThumbnail.small}
            />
          </Hyperlink>
        )}
      </div>
    </Transition>
  );
});

ContentHubArticle.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  horizontalThumbnail: PropTypes.object,
  id: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isMenuItem: PropTypes.bool,
  isReadMore: PropTypes.bool,
  readingTime: PropTypes.string,
  title: PropTypes.string,
  uri: PropTypes.string,
  verticalThumbnail: PropTypes.object,
};

ContentHubArticle.defaultProps = {
  category: undefined,
  className: undefined,
  horizontalThumbnail: undefined,
  id: undefined,
  isHorizontal: undefined,
  isMenuItem: false,
  isReadMore: false,
  readingTime: undefined,
  title: undefined,
  uri: undefined,
  verticalThumbnail: undefined,
};

export default ContentHubArticle;
