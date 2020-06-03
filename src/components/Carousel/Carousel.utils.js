import React from 'react';
import { BREAKPOINTS } from '~/constants';

export const getCarouselSettings = ({
  className,
  hasFlushPagination,
  hasFullWidthSlides,
  initialSlideIndex,
  isNextButtonActive,
  isPreviousButtonActive,
  Pagination,
  NextButton,
  PreviousButton,
}) => ({
  appendDots: dots => (
    <Pagination
      dots={dots}
      fullWidth={hasFullWidthSlides}
      hasFlushPagination={hasFlushPagination}
    />
  ),
  centerMode: false,
  className,
  customPaging: () => <div />,
  dots: true,
  infinite: hasFullWidthSlides,
  initialSlide: initialSlideIndex,
  nextArrow: <NextButton isActive={isNextButtonActive} theme="light" />,
  prevArrow: <PreviousButton isActive={isPreviousButtonActive} theme="light" />,
  responsive: [
    {
      breakpoint: BREAKPOINTS.SMALL.MAX_WIDTH,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: BREAKPOINTS.MEDIUM.MAX_WIDTH,
      settings: {
        slidesToShow: hasFullWidthSlides ? 1 : 2,
      },
    },
    {
      breakpoint: BREAKPOINTS.XXLARGE.MIN_WIDTH,
      settings: {
        slidesToShow: hasFullWidthSlides ? 1 : 3,
      },
    },
  ],
  slidesToScroll: 1,
  slidesToShow: hasFullWidthSlides ? 1 : 4,
  speed: 500,
  swipeToSlide: true,
});
