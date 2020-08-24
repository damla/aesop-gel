import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '~/components/Carousel';

const ImageCarousel = ({
  autoplaySpeed,
  className,
  hasAutoplay,
  slides,
  theme,
}) => (
  <Carousel
    autoplaySpeed={autoplaySpeed}
    className={className}
    hasAutoplay={hasAutoplay}
    hasFlushPagination={true}
    hasFullWidthSlides={true}
    hasShowCaption={true}
    hasSlideCounter={true}
    slides={slides}
    theme={theme}
  />
);

ImageCarousel.propTypes = {
  autoplaySpeed: PropTypes.number,
  className: PropTypes.string,
  hasAutoplay: PropTypes.bool,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.object.isRequired,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
};

ImageCarousel.defaultProps = {
  autoplaySpeed: 3000,
  className: undefined,
  hasAutoplay: false,
  slides: [],
  theme: 'dark',
};

export default ImageCarousel;
