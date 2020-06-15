import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import Slider from 'react-slick';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeOrXLargeOnlyViewport,
  ascertainIsSmallOrMediumOnlyViewport,
} from '~/utils/viewports';
import Hyperlink from '~/components/Hyperlink';
import Transition from '~/components/Transition';
import { getCarouselSettings } from './Carousel.utils';
import CarouselIntroduction from './components/CarouselIntroduction';
import NextButton from './components/NextButton/NextButton';
import Pagination from './components/Pagination';
import PreviousButton from './components/PreviousButton';
import Slide from './components/Slide';
import styles from './Carousel.module.css';

const Carousel = forwardRef(function CarouselRef(
  {
    className,
    hasFullWidthSlides,
    hasShowCaption,
    hasSlideCounter,
    initialSlideIndex,
    introduction,
    slides,
    theme,
  },
  ref,
) {
  const slidesLength = slides.length;
  const [isCaptionActive, setIsCaptionActive] = useState(true);
  const [isNextButtonActive, setIsNextButtonActive] = useState(true);
  const [isPreviousButtonActive, setIsPreviousButtonActive] = useState(
    hasFullWidthSlides,
  );

  const [caption, setCaption] = useState(
    get(slides[initialSlideIndex], 'caption', ''),
  );

  const [slideCounter, setSlideCounter] = useState(
    `${initialSlideIndex + 1} / ${slidesLength}`,
  );

  useWindowHasResized();

  let slideOffset = 0;

  /* Slide offset refers to the number of slides in view per display size,
   * and effects the offset position and Next Arrow display
   */
  if (!hasFullWidthSlides) {
    if (ascertainIsSmallOnlyViewport()) {
      slideOffset = 1;
    } else if (ascertainIsMediumOnlyViewport()) {
      slideOffset = 2;
    } else if (ascertainIsLargeOrXLargeOnlyViewport()) {
      slideOffset = 3;
    } else {
      slideOffset = 4;
    }
  } else {
    slideOffset = 1;
  }

  if (slidesLength === 0) {
    return null;
  }

  const isMobileOrTablet = ascertainIsSmallOrMediumOnlyViewport();

  const classSet = cx(
    styles.base,
    { [styles.fullWidthSlides]: hasFullWidthSlides },
    styles[theme],
    className,
  );

  const settings = getCarouselSettings({
    className: styles.carousel,
    hasFullWidthSlides,
    initialSlideIndex,
    isNextButtonActive,
    isPreviousButtonActive,
    Pagination,
    NextButton,
    PreviousButton,
    theme,
  });

  const hasIntroSlide =
    introduction && !isMobileOrTablet && !hasFullWidthSlides;

  const totalSlidesCount = hasIntroSlide ? slidesLength + 1 : slidesLength;

  const handleBeforeChange = (index, nextIndex) => {
    setIsCaptionActive(false);

    if (hasFullWidthSlides) {
      return;
    }

    const currentIndex = totalSlidesCount - nextIndex;

    setIsPreviousButtonActive(nextIndex !== 0);
    setIsNextButtonActive(currentIndex === slideOffset ? false : true);
  };

  const handleAfterChange = index => {
    setIsCaptionActive(true);
    setCaption(slides[index].caption);
    setSlideCounter(`${index + 1} of ${slidesLength}`);
  };

  return (
    <div className={classSet} ref={ref}>
      {!hasIntroSlide && introduction && (
        <aside className={styles.mobileCarouselIntroductionWrapper}>
          <CarouselIntroduction
            cta={introduction.cta}
            description={introduction.description}
            eyebrow={introduction.eyebrow}
            heading={introduction.heading}
            theme={theme}
          />
        </aside>
      )}

      <Slider
        {...settings}
        afterChange={handleAfterChange}
        beforeChange={handleBeforeChange}
      >
        {hasIntroSlide && (
          <CarouselIntroduction
            cta={introduction.cta}
            description={introduction.description}
            eyebrow={introduction.eyebrow}
            heading={introduction.heading}
            theme={theme}
          />
        )}

        {slides.map(({ url, ...slide }, index) => (
          <div className={styles.slideWrapper} key={index}>
            {url ? (
              <Hyperlink
                className={cx(styles.item, styles.link)}
                theme={theme}
                title={`Link to ${slide.heading}`}
                url={url}
              >
                <Slide
                  {...slide}
                  isFullWidthSlide={hasFullWidthSlides}
                  theme={theme}
                />
              </Hyperlink>
            ) : (
              <div className={styles.item} key={index}>
                <Slide
                  {...slide}
                  isFullWidthSlide={hasFullWidthSlides}
                  theme={theme}
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
      {(hasShowCaption || hasSlideCounter) && (
        <footer className={styles.footer}>
          {hasSlideCounter && (
            <div className={styles.slideCounter}>
              {totalSlidesCount > 1 && slideCounter}
            </div>
          )}
          {hasShowCaption && (
            <Transition isActive={isCaptionActive} type="fade">
              <div className={styles.caption}>{caption}</div>
            </Transition>
          )}
        </footer>
      )}
    </div>
  );
});

Carousel.propTypes = {
  className: PropTypes.string,
  hasFullWidthSlides: PropTypes.bool,
  hasShowCaption: PropTypes.bool,
  hasSlideCounter: PropTypes.bool,
  initialSlideIndex: PropTypes.number,
  introduction: PropTypes.shape({
    cta: PropTypes.shape({
      style: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string,
    }),
    description: PropTypes.string,
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
  }),
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      description: PropTypes.string,
      heading: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.object.isRequired,
      url: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
};

Carousel.defaultProps = {
  className: undefined,
  hasFullWidthSlides: false,
  hasShowCaption: false,
  hasSlideCounter: false,
  initialSlideIndex: 0,
  introduction: undefined,
  slides: [],
  theme: 'dark',
};

export default Carousel;
