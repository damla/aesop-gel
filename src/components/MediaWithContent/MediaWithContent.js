import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Media from './components/Media';
import Content from './components/Content';
import styles from './MediaWithContent.module.css';

const MediaWithContent = forwardRef(
  (
    {
      backgroundColor,
      className,
      content,
      copy,
      foregroundImage,
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
      className,
    );

    return (
      <section className={classSet} ref={ref} style={{ backgroundColor }}>
        <Media
          className={styles.media}
          foregroundImage={foregroundImage}
          hasFullWidthImage={hasFullWidthImage}
          isHero={isHero}
          media={media}
        />
        <Content
          content={content}
          copy={copy}
          hasFullWidthImage={hasFullWidthImage}
          isHero={isHero}
          isReverse={isReverse}
          theme={theme}
        />
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
  foregroundImage: PropTypes.element,
  hasFullWidthImage: PropTypes.bool,
  isHero: PropTypes.bool,
  isReverse: PropTypes.bool,
  media: PropTypes.element.isRequired,
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
  foregroundImage: undefined,
  hasFullWidthImage: false,
  isHero: false,
  isReverse: false,
  media: undefined,
  theme: 'dark',
};

export default MediaWithContent;
