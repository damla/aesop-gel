import React from 'react';
import cx from 'classnames';
import Slider from 'react-slick';
import useWindowHasResized from '~/hooks/useWindowHasResized';
import { ascertainIsMobileOrTablet } from '~/utils/viewports';
import Button from '~/components/Button';
import Hyperlink from '~/components/Hyperlink';
import Icon from '~/components/Icon';
import PROP_TYPES, {
  NEXT_BUTTON_PROP_TYPES,
  PREVIOUS_BUTTON_PROP_TYPES,
  PAGINATION_PROP_TYPES,
} from './Carousel.prop-types';
import { getCarouselSettings } from './Carousel.utils';
import CarouselIntroduction from './components/CarouselIntroduction';
import Slide from './components/Slide';
import styles from './Carousel.module.css';

/**
 * The onClick callback for the NextButton and PreviousButton
 * components are provided through react-slick
 */
const NextButton = ({ onClick }) => (
  <Button
    className={cx(styles.directionButton, styles.next)}
    inline={true}
    onClick={onClick}
    title="next slide"
  >
    <Icon height={18} name="chevron" width={18} />
  </Button>
);

NextButton.propTypes = NEXT_BUTTON_PROP_TYPES;

const PreviousButton = ({ onClick }) => (
  <Button
    className={cx(styles.directionButton, styles.previous)}
    inline={true}
    onClick={onClick}
    title="previous slide"
  >
    <Icon height={18} name="chevron" width={18} />
  </Button>
);

PreviousButton.propTypes = PREVIOUS_BUTTON_PROP_TYPES;

const Pagination = ({ dots }) => (
  <div>
    <ul className={styles.pagination}>{dots}</ul>
  </div>
);

Pagination.propTypes = PAGINATION_PROP_TYPES;

const Carousel = ({ className = '', introduction, slides = [] }) => {
  useWindowHasResized();

  if (slides.length === 0) {
    return null;
  }

  const isMobileOrTablet = ascertainIsMobileOrTablet();
  const classSet = cx(styles.base, className);

  const settings = getCarouselSettings({
    className: classSet,
    Pagination,
    NextButton,
    PreviousButton,
  });

  return (
    <>
      {introduction && isMobileOrTablet && (
        <aside className={styles.mobileCarouselIntroductionWrapper}>
          <CarouselIntroduction
            description={introduction.description}
            heading={introduction.heading}
          />
        </aside>
      )}

      <Slider {...settings}>
        {introduction && !isMobileOrTablet && (
          <CarouselIntroduction
            description={introduction.description}
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
    </>
  );
};

Carousel.propTypes = PROP_TYPES;

export { CarouselIntroduction, NextButton, Pagination, PreviousButton };

export default Carousel;
