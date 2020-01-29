import PropTypes from 'prop-types';

export const PROP_TYPES = {
  className: PropTypes.string,
  productName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PROP_TYPES;
