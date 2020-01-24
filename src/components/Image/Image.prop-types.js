import PropTypes from 'prop-types';

export const HYPERLINK_PROP_TYPES_SHAPE = PropTypes.object;

export const PROP_TYPES = {
  className: PropTypes.string,
  altText: PropTypes.string.isRequired,
  cta: HYPERLINK_PROP_TYPES_SHAPE,
  fullBleedImage: PropTypes.bool,
  id: PropTypes.string,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
  type: PropTypes.string,
};

export default PROP_TYPES;
