import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import Hyperlink from '~/components/Hyperlink';
import SectionHeading from '~/components/SectionHeading';
import styles from './FullscreenHeroContent.module.css';

const FullscreenHeroContent = ({
  className,
  copy,
  cta,
  hasFullWidthImage,
  isHero,
  isReverse,
  theme,
}) => {
  const classSet = cx(
    className,
    styles.base,
    { [styles.reverse]: isReverse },
    { [styles.hero]: isHero },
    { [styles.notHero]: !isHero },
    { [styles.hasFullWidthImage]: hasFullWidthImage },
    { [styles.hasHalfWidthImage]: !hasFullWidthImage },
    styles[theme.toLowerCase()],
  );

  return (
    <div className={classSet}>
      <div className={styles.innerWrapper}>
        <SectionHeading
          childrenClassNames={{
            eyebrow: styles.eyebrow,
          }}
          className={styles.header}
          eyebrow={copy.eyebrow}
          hasSerifFontHeading={true}
          heading={copy.heading}
          isFlush={true}
          subHeading={copy.subHeading}
          theme={theme}
        />
      </div>
      {cta && (
        <Hyperlink
          className={styles.cta}
          isAlternate={false}
          style={HYPERLINK_STYLE_TYPES.INTERNAL_BUTTON_LINK}
          theme={theme}
          url={cta.url}
        >
          {cta.text}
        </Hyperlink>
      )}
    </div>
  );
};

FullscreenHeroContent.propTypes = {
  className: PropTypes.string,
  cta: PropTypes.shape({
    style: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  FullscreenHeroContent: PropTypes.any,
  copy: PropTypes.shape({
    description: PropTypes.any,
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }).isRequired,
  hasFullWidthImage: PropTypes.bool,
  isHero: PropTypes.bool,
  isReverse: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

FullscreenHeroContent.defaultProps = {
  className: undefined,
  cta: undefined,
  FullscreenHeroContent: undefined,
  copy: {
    description: undefined,
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  hasFullWidthImage: false,
  isHero: false,
  isReverse: false,
  theme: 'dark',
};

export default FullscreenHeroContent;
