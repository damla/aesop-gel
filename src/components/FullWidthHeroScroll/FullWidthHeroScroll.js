import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import BodyCopy from '~/components/BodyCopy';
import Hyperlink from '~/components/Hyperlink';
import FullscreenSection from './components/FullscreenSection';
import Icon from '~/components/Icon';
import Video from '~/components/Video';
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
    };

    window.addEventListener('scroll', fadeScrollBtn);

    return function cleanup() {
      window.removeEventListener('scroll', fadeScrollBtn);
    };
  });

  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight - 120,
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
            className={cx(styles.backgroundVideo)}
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
                hasSerifFontHeading={hasSerifFontHeading}
                heading={title}
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
              className={cx(styles.scrollIndicator, styles[theme])}
              onClick={handleScrollDown}
              ref={scrollBtn}
              type="button"
            >
              <Icon height={12} name="scrolldown" theme={theme} width={12} />
            </button>
          </div>
          {textBlocks.map(({ hasSerifFont, text }, index) => (
            <FullscreenSection
              hasSerifFont={hasSerifFont}
              key={index}
              text={text}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
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
