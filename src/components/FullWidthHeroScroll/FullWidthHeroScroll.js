import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { BodyCopy, Hyperlink, Icon } from '~/components';
import BackgroundElement from './components/BackgroundElement';
import FullscreenSection from './components/FullscreenSection';
import styles from './FullWidthHeroScroll.module.css';

const FullWidthHeroScroll = ({
  backgroundImage,
  backgroundVideo,
  copy,
  cta,
  eyebrow,
  hasSerifFontHeading,
  hasTopOffset,
  id,
  mediaType,
  textBlocks,
  theme,
  title,
}) => {
  const scrollButton = useRef();
  const offset = 120;

  useEffect(() => {
    const scrollButtonCurrent = scrollButton.current;
    const scrollThreshold = 100;

    const fadeScrollButton = () => {
      if (window.scrollY > scrollThreshold) return;

      scrollButtonCurrent.style.opacity =
        (scrollThreshold - window.scrollY) / scrollThreshold;
    };

    window.addEventListener('scroll', fadeScrollButton);

    return function cleanup() {
      window.removeEventListener('scroll', fadeScrollButton);
    };
  });

  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight - offset,
      left: 0,
      behavior: 'smooth',
    });
  };

  const classSet = cx(styles.base, styles[theme], {
    [styles.topOffset]: hasTopOffset,
  });

  return (
    <section className={classSet} id={id}>
      <div className={cx(styles.scrollLockMedia)}>
        <BackgroundElement
          image={backgroundImage}
          mediaType={mediaType}
          video={backgroundVideo}
        />
      </div>
      <div className={styles.scrollingContent}>
        <div className={styles.fullscreenHero}>
          <div className={styles.innerWrapper}>
            <BodyCopy
              copy={copy}
              eyebrow={eyebrow}
              hasSerifFontHeading={hasSerifFontHeading}
              heading={title}
              isHeroArticle={true}
              theme={theme}
            />
            {cta && (
              <Hyperlink
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
            className={styles.scrollIndicator}
            onClick={handleScrollDown}
            ref={scrollButton}
            type="button"
          >
            <Icon height={12} name="scrolldown" theme={theme} width={12} />
          </button>
        </div>
        {textBlocks.map(({ text }, index) => (
          <FullscreenSection key={index} text={text} theme={theme} />
        ))}
      </div>
    </section>
  );
};

FullWidthHeroScroll.propTypes = {
  backgroundImage: PropTypes.object,
  backgroundVideo: PropTypes.object,
  copy: PropTypes.node,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  hasTopOffset: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  mediaType: PropTypes.oneOf(['image', 'video']),
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
  backgroundVideo: undefined,
  backgroundImage: undefined,
  copy: undefined,
  cta: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  hasTopOffset: false,
  heading: undefined,
  id: undefined,
  mediaType: undefined,
  theme: 'light',
  textBlocks: [],
  title: undefined,
};

export default FullWidthHeroScroll;
