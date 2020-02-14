import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from 'react-slick';
import useWindowHasResized from '~/hooks/useWindowHasResized';
import { ascertainIsMobileOrTablet } from '~/utils/viewports';
import Hyperlink from '~/components/Hyperlink';
import { getCarouselSettings } from './Carousel.utils';
import CarouselIntroduction from './components/CarouselIntroduction';
import NextButton from './components/NextButton/NextButton';
import Pagination from './components/Pagination';
import PreviousButton from './components/PreviousButton';
import Slide from './components/Slide';
import styles from './Carousel.module.css';

const Carousel = ({ className, introduction, slides }) => {
  useWindowHasResized();

  if (typeof slides === undefined || slides.length === 0) {
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

Carousel.propTypes = {
  className: PropTypes.string,
  introduction: PropTypes.shape({
    cta: PropTypes.object,
    description: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  }),
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      heading: PropTypes.string,
      image: PropTypes.object.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
};

Carousel.defaultProps = {
  className: undefined,
  introduction: undefined,
  slides: undefined,
};

export default Carousel;
