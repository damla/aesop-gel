import PropTypes from 'prop-types';

export const PROP_TYPES = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  price: PropTypes.string,
  sku: PropTypes.string,
};

export default PROP_TYPES;
