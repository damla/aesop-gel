import PropTypes from 'prop-types';

export const PROP_TYPES = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PROP_TYPES;
