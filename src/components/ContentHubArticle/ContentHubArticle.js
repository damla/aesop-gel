import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks/useOnScreen';
import Image from '~/components/Image';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Transition from '~/components/Transition';
import styles from './ContentHubArticle.module.css';

const ContentHubArticle = ({
  category,
  className,
  dataTestRef,
  horizontalThumbnail,
  id,
  isHorizontal, // use horizontal or vertical thumbnail
  isMenuItem, // if it's displayed in Read Menu Navigation
  isReadMore, // if it's displayed in ReadMore section
  readingTime,
  title,
  uri,
  verticalThumbnail,
}) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, 0.4);
  const currentImage = isHorizontal ? horizontalThumbnail : verticalThumbnail;
  const classSet = cx(styles.base, className);
  const categoryClassSet = cx(styles.category);
  const imageClassSet = cx(styles.image);
  const nonMobileImageClassSet = cx(styles.image, styles.nonMobile);
  const noteClassSet = cx(styles.note);
  const mobileImageClassSet = cx(styles.image, styles.mobile);
  const titleClassSet = cx(styles.title);
  const titleRef = useRef(null);

  const imageMouseEnter = () => {
    titleRef.current.getElementsByClassName(titleClassSet)[0].className = cx(
      styles.title,
      styles.titleActive,
    );
  };

  const imageMouseLeave = () => {
    titleRef.current.getElementsByClassName(
      titleClassSet,
    )[0].className = titleClassSet;
  };

  return (
    <Transition isActive={isOnScreen} type="fade">
      <div className={classSet} id={id} ref={ref}>
        {isReadMore && !isMenuItem && (
          <Hyperlink
            className={imageClassSet}
            dataTestRef={`${dataTestRef}_READMORE_THUMBNAIL`}
            title={title}
            url={uri}
          >
            <div
              onMouseEnter={() => imageMouseEnter()}
              onMouseLeave={() => imageMouseLeave()}
            >
              <Image
                altText={currentImage.altText}
                large={currentImage.large}
                medium={currentImage.medium}
                small={currentImage.small}
              />
            </div>
          </Hyperlink>
        )}
        {!isMenuItem && (
          <Heading className={categoryClassSet} level="3" size="xSmall">
            {category}
          </Heading>
        )}
        <div ref={titleRef}>
          <Hyperlink
            dataTestRef={`${dataTestRef}_TITLE`}
            title={title}
            url={uri}
          >
            <span className={titleClassSet}>{title}</span>
          </Hyperlink>
        </div>
        {readingTime && (
          <Heading className={noteClassSet} level="3" size="xSmall">
            {readingTime}
          </Heading>
        )}

        {!isReadMore && !isMenuItem && (
          <Hyperlink
            className={nonMobileImageClassSet}
            dataTestRef={`${dataTestRef}_NON_MOBILE_THUMBNAIL`}
            title={title}
            url={uri}
          >
            <div
              onMouseEnter={() => imageMouseEnter()}
              onMouseLeave={() => imageMouseLeave()}
            >
              <Image
                altText={currentImage.altText}
                className={styles.image}
                large={currentImage.large}
                medium={currentImage.medium}
                small={currentImage.small}
              />
            </div>
          </Hyperlink>
        )}
        {!isReadMore && !isMenuItem && (
          <Hyperlink
            className={mobileImageClassSet}
            dataTestRef={`${dataTestRef}_MOBILE_THUMBNAIL`}
            title={title}
            url={uri}
          >
            <div
              onMouseEnter={() => imageMouseEnter()}
              onMouseLeave={() => imageMouseLeave()}
            >
              <Image
                altText={horizontalThumbnail.altText}
                className={styles.image}
                large={horizontalThumbnail.large}
                medium={horizontalThumbnail.medium}
                small={horizontalThumbnail.small}
              />
            </div>
          </Hyperlink>
        )}
      </div>
    </Transition>
  );
};

ContentHubArticle.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
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
  dataTestRef: undefined,
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
