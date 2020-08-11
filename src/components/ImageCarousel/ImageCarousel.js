import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '~/components/Carousel';

const ImageCarousel = ({ className, slides }) => (
  <Carousel
    className={className}
    hasFullWidthSlides={true}
    hasShowCaption={true}
    hasSlideCounter={true}
    slides={slides}
  />
);

ImageCarousel.propTypes = {
  className: PropTypes.string,
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
  className: undefined,
  slides: [],
  theme: 'dark',
};

export default ImageCarousel;
