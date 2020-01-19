import PropTypes from 'prop-types';

export const PROP_TYPES = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.string,
  sku: PropTypes.string,
};

export default PROP_TYPES;
