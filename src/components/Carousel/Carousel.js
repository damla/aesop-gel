import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from 'react-slick';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import {
  ascertainIsSmallOnlyViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeOrXLargeOnlyViewport,
  ascertainIsSmallOrMediumOnlyViewport,
} from '~/utils/viewports';
import Hyperlink from '~/components/Hyperlink';
import { getCarouselSettings } from './Carousel.utils';
import CarouselIntroduction from './components/CarouselIntroduction';
import NextButton from './components/NextButton/NextButton';
import Pagination from './components/Pagination';
import PreviousButton from './components/PreviousButton';
import Slide from './components/Slide';
import styles from './Carousel.module.css';

const Carousel = forwardRef(
  ({ className, introduction, slides, theme }, ref) => {
    const [isNextButtonActive, setIsNextButtonActive] = useState(true);
    const [isPreviousButtonActive, setIsPreviousButtonActive] = useState(false);

    useWindowHasResized();

    let slideOffset = 0;

    if (ascertainIsSmallOnlyViewport()) {
      slideOffset = 1;
    } else if (ascertainIsMediumOnlyViewport()) {
      slideOffset = 2;
    } else if (ascertainIsLargeOrXLargeOnlyViewport()) {
      slideOffset = 3;
    } else {
      slideOffset = 4;
    }

    if (typeof slides === undefined || slides.length === 0) {
      return null;
    }

    const isMobileOrTablet = ascertainIsSmallOrMediumOnlyViewport();

    const classSet = cx(styles.base, styles[theme], className);

    const settings = getCarouselSettings({
      className: classSet,
      isNextButtonActive,
      isPreviousButtonActive,
      Pagination,
      NextButton,
      PreviousButton,
    });

    const hasIntroSlide = introduction && !isMobileOrTablet;
    const slidesLength = slides.length;
    const slidesCount = hasIntroSlide ? slidesLength + 1 : slidesLength;

    const handleAfterChange = (index, nextIndex) => {
      const currentIndex = slidesCount - nextIndex;

      setIsPreviousButtonActive(nextIndex !== 0);
      setIsNextButtonActive(currentIndex === slideOffset ? false : true);
    };

    return (
      <section ref={ref}>
        {!hasIntroSlide && introduction && (
          <aside className={styles.mobileCarouselIntroductionWrapper}>
            <CarouselIntroduction
              cta={introduction.cta}
              description={introduction.description}
              eyebrow={introduction.eyebrow}
              heading={introduction.heading}
            />
          </aside>
        )}

        <Slider {...settings} beforeChange={handleAfterChange}>
          {hasIntroSlide && (
            <CarouselIntroduction
              cta={introduction.cta}
              description={introduction.description}
              eyebrow={introduction.eyebrow}
              heading={introduction.heading}
            />
          )}

          {slides.map(({ url, ...slide }, index) => (
            <div key={index}>
              {url ? (
                <Hyperlink
                  className={cx(styles.item, styles.link)}
                  title={`Link to ${slide.heading}`}
                  url={url}
                >
                  <Slide {...slide} />
                </Hyperlink>
              ) : (
                <div className={styles.item} key={index}>
                  <Slide {...slide} />
                </div>
              )}
            </div>
          ))}
        </Slider>
      </section>
    );
  },
);

Carousel.propTypes = {
  className: PropTypes.string,
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
      description: PropTypes.string,
      heading: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.object.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Carousel.defaultProps = {
  className: undefined,
  introduction: undefined,
  slides: undefined,
  theme: 'dark',
};

export default Carousel;
