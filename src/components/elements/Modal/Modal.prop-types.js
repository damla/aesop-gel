import PropTypes from 'prop-types';

export const PROP_TYPES = {
  children: PropTypes.any,
  className: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default PROP_TYPES;
