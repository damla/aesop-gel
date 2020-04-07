import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SectionHeading from '~/components/SectionHeading';
import Image from '~/components/Image';
import styles from './ImageWithHeaderAndContent.module.css';
import { ParagraphSet } from '../Paragraph';

const ImageWithHeaderAndContent = forwardRef(
  (
    {
      backgroundColor,
      className,
      content,
      copy,
      hasFullWidthImage,
      image,
      isReverse,
      theme,
      video,
    },
    ref,
  ) => {
    const classSet = cx(
      styles.base,
      { [styles.reverse]: isReverse },
      { [styles.original]: !isReverse },
      styles[theme.toLowerCase()],
      className,
    );

    return (
      <section
        className={classSet}
        div={true}
        ref={ref}
        style={{ backgroundColor }}
      >
        <div
          className={cx(styles.mediaWrapper, {
            [styles.isFullWidthImage]: hasFullWidthImage,
          })}
        >
          {video ? (
            video
          ) : (
            <Image
              altText={image.altText}
              large={image.large}
              medium={image.medium}
              small={image.small}
              theme={theme}
            />
          )}
        </div>

        <div
          className={cx(styles.container, {
            [styles.hasFullWidthImage]: hasFullWidthImage,
          })}
        >
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <SectionHeading
                childrenClassNames={{
                  heading: styles.heading,
                  subHeading: styles.subHeading,
                }}
                eyebrow={copy.eyebrow}
                hasHeadingTopMargin={false}
                hasSerifFontHeading={true}
                heading={copy.heading}
                subHeading={copy.subHeading}
                theme={theme}
              />
            </div>
            <div className={styles.content}>
              {copy.description && (
                <ParagraphSet className={styles.description} theme={theme}>
                  {copy.description}
                </ParagraphSet>
              )}

              {content}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

ImageWithHeaderAndContent.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.any,
  copy: PropTypes.shape({
    description: PropTypes.any,
    eyebrow: PropTypes.string,
    heading: PropTypes,
    subHeading: PropTypes.string,
  }).isRequired,
  hasFullWidthImage: PropTypes.bool,
  image: PropTypes.object,
  isReverse: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
  video: PropTypes.object,
};

ImageWithHeaderAndContent.defaultProps = {
  backgroundColor: '#F6F5E8',
  className: undefined,
  content: undefined,
  copy: {
    description: undefined,
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  hasFullWidthImage: false,
  image: undefined,
  isReverse: false,
  theme: 'dark',
  video: undefined,
};

export default ImageWithHeaderAndContent;
