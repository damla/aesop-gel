import PropTypes from 'prop-types';

export const HYPERLINK_PROP_TYPES_SHAPE = PropTypes.object;

export const PROP_TYPES = {
  className: PropTypes.string,
  dataRef: PropTypes.string,
  height: PropTypes.number,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  width: PropTypes.number,
};

export default PROP_TYPES;
