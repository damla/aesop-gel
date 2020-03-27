import React from 'react';
import { BREAKPOINTS } from '~/constants';

export const getCarouselSettings = ({
  className,
  isNextButtonActive,
  isPreviousButtonActive,
  Pagination,
  NextButton,
  PreviousButton,
}) => ({
  appendDots: dots => <Pagination dots={dots} />,
  centerMode: false,
  className,
  customPaging: () => <div />,
  dots: true,
  infinite: false,
  initialSlide: 0,
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
        slidesToShow: 2,
      },
    },
    {
      breakpoint: BREAKPOINTS.XXLARGE.MIN_WIDTH,
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
