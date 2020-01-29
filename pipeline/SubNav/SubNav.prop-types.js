import PropTypes from 'prop-types';

export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;

export const PROP_TYPES = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(HYPERLINK_PROP_TYPE_SHAPE).isRequired, // @TODO hyperlink type
  title: PropTypes.string,
  titleClassName: PropTypes.string,
};

export default PROP_TYPES;
