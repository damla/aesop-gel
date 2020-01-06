import PropTypes from 'prop-types';

export const PROP_TYPES = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  visuallyHidden: PropTypes.bool,
  xLarge: PropTypes.bool,
};

export default PROP_TYPES;
