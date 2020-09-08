import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import BodyCopy from '~/components/BodyCopy';
import Hyperlink from '~/components/Hyperlink';
import FullscreenSection from './components/FullscreenSection';

import styles from './FullWidthHeroScroll.module.css';

const FullWidthHeroScroll = ({
  backgroundVideo,
  copy,
  cta,
  eyebrow,
  hasSerifFontHeading,
  id,
  textBlocks,
  theme,
  title,
}) => {
  const scrollBtn = useRef();

  useEffect(() => {
    const scrollBtnEl = scrollBtn.current;

    const fadeScrollBtn = () => {
      if (window.scrollY > 100) {
        return;
      }
      scrollBtnEl.style.opacity = (100 - window.scrollY) / 100;
      console.log('scrolling');
    };

    fadeScrollBtn;
    window.addEventListener('scroll', fadeScrollBtn);

    return () => {
      window.removeEventListener('scroll', fadeScrollBtn);
    };
  });

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={cx(styles.scrollLockWrap)} id={id}>
      <div>
        <div className={cx(styles.scrollLockMedia)}>
          <Video
            {...backgroundVideo}
            hasAllowAudio={false}
            hasAutoplay={true}
            hasControls={false}
            hasLoop={true}
            isMuted={true}
          />
        </div>
        <div className={cx(styles.scrollingContent)}>
          <div className={cx(styles.fullscreenHero)}>
            <div className={styles.innerWrapper}>
              <BodyCopy
                copy={copy}
                eyebrow={eyebrow}
                eyebrow={title}
                hasSerifFontHeading={hasSerifFontHeading}
                theme={theme}
              />
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
            <button
              className={cx(styles.ScrollIndicator, styles[theme])}
            <div
              className={cx(styles.ScrollIndicatorWrapper, styles[theme])}
              ref={scrollBtn}
              type="button"
            >
              <svg
              aria-labelledby="e00a5034-d523-4b5a-b5ee-51159feac31e"
              className="Icon ScrollIndicator-icon"
              role="img"
              viewBox="0 0 50 50"
            >
              <title id="e00a5034-d523-4b5a-b5ee-51159feac31e">
                Scroll down
                </title>
              <g>
                <polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 " />
              </g>
            </svg>
            </button>
        </div>
        {textBlocks.map(({ hasSerifFont, text }, index) => {
          return (
            <FullscreenSection
              hasSerifFont={hasSerifFont}
              key={index}
              text={text}
              theme={theme}
            />
          );
        })}
      </div>
      </div>
    </section >
  );
};

FullWidthHeroScroll.propTypes = {
  backgroundVideo: PropTypes.object,
  copy: PropTypes.node,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  textBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.node,
      hasSerifFont: PropTypes.bool,
    }),
  ),
  title: PropTypes.string,
};

FullWidthHeroScroll.defaultProps = {
  backgroundVideo: [],
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  heading: undefined,
  id: undefined,
  theme: 'light',
  textBlocks: [],
  title: undefined,
};

export default FullWidthHeroScroll;
