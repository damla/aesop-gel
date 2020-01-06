import PropTypes from 'prop-types';

export const PROP_TYPES = {
  caption: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default PROP_TYPES;
