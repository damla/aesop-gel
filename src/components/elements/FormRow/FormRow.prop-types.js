import PropTypes from 'prop-types';

export const PROP_TYPES = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default PROP_TYPES;
