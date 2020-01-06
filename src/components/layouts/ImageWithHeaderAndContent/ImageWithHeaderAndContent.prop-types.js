import PropTypes from 'prop-types';

export const IMAGE_PROP_TYPE_SHAPE = PropTypes.object;
export const COPY_PROP_TYPE_SHAPE = PropTypes.exact({
  description: PropTypes.string,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const PROP_TYPES = {
  copy: COPY_PROP_TYPE_SHAPE.isRequired,
  content: PropTypes.oneOf([PropTypes.element, PropTypes.node]),
  image: IMAGE_PROP_TYPE_SHAPE.isRequired,
  reverse: PropTypes.bool,
};

export default PROP_TYPES;
