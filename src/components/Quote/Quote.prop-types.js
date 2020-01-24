import PropTypes from 'prop-types';

export const PROP_TYPES = {
  className: PropTypes.string,
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  noTopPadding: PropTypes.bool,
};

export default PROP_TYPES;
