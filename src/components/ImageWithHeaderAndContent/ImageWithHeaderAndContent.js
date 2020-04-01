import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
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
            <header className={styles.header}>
              <Heading
                className={styles.heading}
                level="2"
                noMargin={true}
                size="xXSmall"
                theme={theme}
              >
                {copy.heading}
              </Heading>
              <Heading
                className={styles.subHeading}
                hasSerifFont={true}
                level="3"
                size="xLarge"
                theme={theme}
              >
                {copy.subHeading}
              </Heading>
              <ParagraphSet className={styles.description} theme={theme}>
                {copy.description}
              </ParagraphSet>
            </header>
            {content}
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
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  }).isRequired,
  hasFullWidthImage: PropTypes.bool,
  image: PropTypes.object.isRequired,
  isReverse: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
  video: PropTypes.object,
};

ImageWithHeaderAndContent.defaultProps = {
  backgroundColor: '#F6F5E8',
  className: undefined,
  content: undefined,
  copy: undefined,
  hasFullWidthImage: false,
  image: undefined,
  isReverse: false,
  theme: 'dark',
  video: undefined,
};

export default ImageWithHeaderAndContent;
