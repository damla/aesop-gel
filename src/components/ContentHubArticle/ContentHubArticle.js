import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks/useOnScreen';
import Image from '~/components/Image';
import Hyperlink from '~/components/Hyperlink';
import Transition from '~/components/Transition';
import styles from './ContentHubArticle.module.css';

const ContentHubArticle = ({
  category,
  childrenClassNames,
  className,
  dataTestRef,
  horizontalThumbnail,
  id,
  isHorizontal, // use horizontal or vertical thumbnail
  isInFirstGroup,
  isMenuItem, // if it's displayed in Read Menu Navigation
  isReadMore, // if it's displayed in ReadMore section
  longTitle,
  readingTime,
  uri,
  verticalThumbnail,
}) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, isHorizontal ? 0.6 : 0.4);
  const currentImage = isHorizontal ? horizontalThumbnail : verticalThumbnail;
  const classSet = cx(styles.base, className);
  const categoryClassSet = cx(
    childrenClassNames && childrenClassNames.category,
    styles.category,
  );
  const imageClassSet = cx(styles.image);
  const readMoreThumbnailRef = useRef(null);
  const nonMobileImageClassSet = cx(styles.image, styles.nonMobile);
  const nonMobileThumbnailRef = useRef(null);
  const noteClassSet = cx(
    childrenClassNames && childrenClassNames.note,
    styles.note,
  );
  const mobileImageClassSet = cx(styles.image, styles.mobile);
  const mobileThumbnailRef = useRef(null);
  const titleClassSet = cx(
    childrenClassNames && childrenClassNames.title,
    styles.title,
  );
  const titleRef = useRef(null);

  const imageMouseEnter = () => {
    const titleSpan = titleRef.current
      .getElementsByClassName(titleClassSet)[0]
      .getElementsByTagName('span')[0];
    titleSpan.className = cx(styles.title, styles.titleActive);
  };

  const imageMouseLeave = () => {
    const titleSpan = titleRef.current
      .getElementsByClassName(titleClassSet)[0]
      .getElementsByTagName('span')[0];
    titleSpan.className = '';
  };

  const titleMouseEnter = () => {
    [readMoreThumbnailRef, nonMobileThumbnailRef, mobileThumbnailRef].forEach(
      imageRef => {
        if (imageRef.current)
          imageRef.current.className = cx(styles.imageActive);
      },
    );
  };

  const titleMouseLeave = () => {
    [readMoreThumbnailRef, nonMobileThumbnailRef, mobileThumbnailRef].forEach(
      imageRef => {
        if (imageRef.current)
          imageRef.current.className = cx(styles.imageUnactive);
      },
    );
  };

  return (
    <Transition isActive={isInFirstGroup || isOnScreen} type="fade">
      <div className={classSet} id={id} ref={ref}>
        {isReadMore && !isMenuItem && (
          <Hyperlink
            className={imageClassSet}
            dataTestRef={`${dataTestRef}_READMORE_THUMBNAIL`}
            title={longTitle}
            url={uri + '?contentful=true'} // @TODO Need to remove the query
          >
            <div
              onMouseEnter={() => imageMouseEnter()}
              onMouseLeave={() => imageMouseLeave()}
            >
              <Image
                altText={currentImage.altText}
                large={currentImage.large}
                medium={currentImage.medium}
                ref={readMoreThumbnailRef}
                small={currentImage.small}
              />
            </div>
          </Hyperlink>
        )}
        {!isMenuItem && <div className={categoryClassSet}>{category}</div>}
        <div
          onMouseEnter={() => titleMouseEnter()}
          onMouseLeave={() => titleMouseLeave()}
          ref={titleRef}
        >
          <Hyperlink
            className={titleClassSet}
            dataTestRef={`${dataTestRef}_TITLE`}
            title={longTitle}
            url={uri + '?contentful=true'} // @TODO Need to remove the query
          >
            <span>{longTitle}</span>
          </Hyperlink>
        </div>
        {readingTime && <div className={noteClassSet}>{readingTime}</div>}

        {!isReadMore && !isMenuItem && (
          <Hyperlink
            className={nonMobileImageClassSet}
            dataTestRef={`${dataTestRef}_NON_MOBILE_THUMBNAIL`}
            title={longTitle}
            url={uri + '?contentful=true'} // @TODO Need to remove the query
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
                ref={nonMobileThumbnailRef}
                small={currentImage.small}
              />
            </div>
          </Hyperlink>
        )}
        {!isReadMore && !isMenuItem && (
          <Hyperlink
            className={mobileImageClassSet}
            dataTestRef={`${dataTestRef}_MOBILE_THUMBNAIL`}
            title={longTitle}
            url={uri + '?contentful=true'} // @TODO Need to remove the query
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
                ref={mobileThumbnailRef}
                small={currentImage.small}
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
  childrenClassNames: PropTypes.shape({
    category: PropTypes.string,
    note: PropTypes.string,
    title: PropTypes.string,
  }),
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
  horizontalThumbnail: PropTypes.object,
  id: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isInFirstGroup: PropTypes.bool,
  isMenuItem: PropTypes.bool,
  isReadMore: PropTypes.bool,
  longTitle: PropTypes.string,
  readingTime: PropTypes.string,
  uri: PropTypes.string,
  verticalThumbnail: PropTypes.object,
};

ContentHubArticle.defaultProps = {
  category: undefined,
  childrenClassNames: {
    category: undefined,
    note: undefined,
    title: undefined,
  },
  className: undefined,
  dataTestRef: undefined,
  horizontalThumbnail: undefined,
  id: undefined,
  isHorizontal: undefined,
  isInFirstGroup: false,
  isMenuItem: false,
  isReadMore: false,
  longTitle: undefined,
  readingTime: undefined,
  uri: undefined,
  verticalThumbnail: undefined,
};

export default ContentHubArticle;
