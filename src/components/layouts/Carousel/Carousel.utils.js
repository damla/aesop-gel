import React from 'react';
import cx from 'classNames';
import { BREAKPOINTS } from '~/constants';

export const getCarouselSettings = (
  styles,
  classSet,
  Pagination,
  NextButton,
  PreviousButton,
) => ({
  appendDots: dots => <Pagination dots={dots} />,
  centerMode: false,
  className: cx(styles.base, classSet),
  customPaging: () => <div />,
  dots: true,
  infinite: false,
  initialSlide: 0,
  nextArrow: <NextButton />,
  prevArrow: <PreviousButton />,
  responsive: [
    {
      breakpoint: BREAKPOINTS.MEDIUM.MIN_WIDTH,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: BREAKPOINTS.LARGE.MIN_WIDTH,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: BREAKPOINTS.XLARGE.MIN_WIDTH,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
  slidesToScroll: 1,
  slidesToShow: 4,
  speed: 500,
  swipeToSlide: true,
});
