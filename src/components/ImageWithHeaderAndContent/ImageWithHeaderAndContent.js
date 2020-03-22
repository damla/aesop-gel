import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import { P } from '~/components/Paragraph';
import styles from './ImageWithHeaderAndContent.module.css';
import { ParagraphSet } from '../Paragraph';

const ImageWithHeaderAndContent = ({
  className,
  content,
  copy,
  forwardedRef,
  hasFullWidthImage,
  image,
  isReverse,
  theme,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.reverse]: isReverse },
    styles[`theme-${theme}`],
    className,
  );

  return (
    <section className={classSet} div={true} ref={forwardedRef}>
      <Image
        altText={image.altText}
        className={cx(styles.figure, {
          [styles.isFullWidthImage]: hasFullWidthImage,
        })}
        large={image.large}
        medium={image.medium}
        small={image.small}
        theme={theme}
      />
      <div
        className={cx(styles.container, {
          [styles.hasFullWidthImage]: hasFullWidthImage,
        })}
      >
        <div className={styles.wrapper}>
          <header>
            <Heading
              className={styles.heading}
              level="2"
              noMargin={true}
              size="xSmall"
              theme={theme}
            >
              {copy.heading}
            </Heading>
            <Heading hasSerifFont={true} level="3" size="xLarge" theme={theme}>
              {copy.subHeading}
            </Heading>
            <ParagraphSet className={styles.description}>
              {copy.description}
            </ParagraphSet>
          </header>
          {content}
        </div>
      </div>
    </section>
  );
};

ImageWithHeaderAndContent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.any,
  copy: PropTypes.shape({
    description: PropTypes.any,
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  }).isRequired,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  hasFullWidthImage: PropTypes.bool,
  image: PropTypes.object.isRequired,
  isReverse: PropTypes.bool,
  theme: PropTypes.string,
};

ImageWithHeaderAndContent.defaultProps = {
  className: undefined,
  content: undefined,
  copy: undefined,
  forwardedRef: undefined,
  hasFullWidthImage: false,
  image: undefined,
  isReverse: false,
  theme: 'dark',
};

export default ImageWithHeaderAndContent;
