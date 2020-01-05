import PropTypes from 'prop-types';

export const IMAGE_PROP_TYPE_SHAPE = PropTypes.object;

export const PROP_TYPES = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: IMAGE_PROP_TYPE_SHAPE.isRequred,
};

export default PROP_TYPES;
