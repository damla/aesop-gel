import PropTypes from 'prop-types';

export const IMAGE_PROP_TYPE_SHAPE = PropTypes.object;
export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;

export const SLIDE_PROP_TYPE_SHAPE = PropTypes.exact({
  description: PropTypes.string,
  heading: PropTypes.string,
  image: IMAGE_PROP_TYPE_SHAPE.isRequired,
  url: PropTypes.string,
});

export const INTRODUCTION_PROP_TYPE_SHAPE = PropTypes.exact({
  cta: HYPERLINK_PROP_TYPE_SHAPE,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
});

export const PROP_TYPES = {
  className: PropTypes.string,
  introduction: INTRODUCTION_PROP_TYPE_SHAPE,
  slides: PropTypes.arrayOf(SLIDE_PROP_TYPE_SHAPE).isRequired,
};

export default PROP_TYPES;
