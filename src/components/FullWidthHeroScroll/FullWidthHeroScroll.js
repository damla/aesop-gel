import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import FullscreenVideo from './components/FullscreenVideo';
import styles from './FullWidthHeroScroll.module.css';
import FullscreenSection from './components/FullscreenSection';
import Hyperlink from '~/components/Hyperlink';

const FullWidthHeroScroll = ({
  backgroundVideo,
  copy,
  cta,
  eyebrow,
  hasSerifFontHeading,
<<<<<<< HEAD
  id,
=======
  heading,
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
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

    fadeScrollBtn;
    window.addEventListener('scroll', fadeScrollBtn);

    scrollBtnEl.addEventListener('click', () => {
      window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    });
  });

  return (
<<<<<<< HEAD
    <section className={cx(styles.scrollLockWrap)} id={id}>
=======
    <section className={cx(styles.scrollLockWrap)}>
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
      <div>
        <div className={cx(styles.scrollLockMedia)}>
          <FullscreenVideo {...backgroundVideo} />
        </div>
        <div className={cx(styles.scrollingContent)}>
          <div className={cx(styles.fullscreenHero)}>
            <div className={styles.innerWrapper}>
<<<<<<< HEAD
              {eyebrow && (
                <h4 className={cx(styles.heroEyebrow, styles[theme])}>
                  {eyebrow}
                </h4>
              )}
              {title && (
                <h3
                  className={cx(styles.heroTitle, styles[theme], {
=======
              {eyebrow && <h4 className={cx(styles.heroEyebrow)}>{eyebrow}</h4>}
              {title && (
                <h3
                  className={cx(styles.heroTitle, {
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
                    [styles.serif]: hasSerifFontHeading,
                  })}
                >
                  {title}
                </h3>
              )}
<<<<<<< HEAD
              <div className={cx(styles.fullscreenHeroCopy, styles[theme])}>
                {copy}
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
=======
              {copy}
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
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
            <div
              className={cx(styles.ScrollIndicatorWrapper, styles[theme])}
              ref={scrollBtn}
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
            </div>
          </div>
          {textBlocks.map(({ hasSerifFont, text }, index) => {
<<<<<<< HEAD
=======
            // return (
            //  <div className={cx(styles.fullscreenSection)} key={index} ref={ref + index}>
            //    {/*<Transition isActive={isOnScreen} type="fade">*/}
            //    <Heading level="4" size="medium" theme={theme} className={cx(styles.textBlock)}>
            //      {text}
            //    </Heading>
            //    {/*</Transition>*/}
            //  </div>
            // )
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
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
<<<<<<< HEAD
  id: PropTypes.string,
=======
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
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
<<<<<<< HEAD
  id: undefined,
=======
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
  theme: 'light',
  textBlocks: [],
  title: undefined,
};

export default FullWidthHeroScroll;
