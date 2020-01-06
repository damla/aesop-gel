import PropTypes from 'prop-types';

export const PROP_TYPES = {
  children: PropTypes.any,
  className: PropTypes.string,
  handleClose: PropTypes.func.isRquired,
  isVisible: PropTypes.bool.isRquired,
};

export default PROP_TYPES;
