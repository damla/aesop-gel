import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from '~/components/Image';
import Video from '~/components/Video';
import SectionHeading from '~/components/SectionHeading';
import styles from './MediaWithContent.module.css';
import { ParagraphSet } from '../Paragraph';

const MediaWithContent = forwardRef(
  (
    {
      backgroundColor,
      className,
      content,
      copy,
      hasFullWidthImage,
      isHero,
      isReverse,
      media,
      theme,
    },
    ref,
  ) => {
    const classSet = cx(
      styles.base,
      { [styles.reverse]: isReverse },
      { [styles.hero]: isHero },
      { [styles.section]: !isHero },
      { [styles.hasFullWidthImage]: hasFullWidthImage },
      { [styles.hasHalfWidthImage]: !hasFullWidthImage },
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
        <div className={styles.mediaWrapper}>{media}</div>

        <div className={styles.contentWrapper}>
          <div className={styles.contentInnerWrapper}>
            <SectionHeading
              childrenClassNames={{
                eyebrow: styles.eyebrow,
              }}
              className={styles.header}
              eyebrow={copy.eyebrow}
              hasHeadingTopMargin={false}
              hasSerifFontHeading={true}
              heading={copy.heading}
              subHeading={copy.subHeading}
              theme={theme}
            />
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

MediaWithContent.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.any,
  copy: PropTypes.shape({
    description: PropTypes.any,
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }).isRequired,
  hasFullWidthImage: PropTypes.bool,
  isHero: PropTypes.bool,
  isReverse: PropTypes.bool,
  media: PropTypes.oneOfType([
    PropTypes.instanceOf(Image),
    PropTypes.instanceOf(Video),
  ]).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

MediaWithContent.defaultProps = {
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
  isHero: false,
  isReverse: false,
  media: undefined,
  theme: 'dark',
};

export default MediaWithContent;
