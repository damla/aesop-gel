import PropTypes from 'prop-types';

export const DEFINITION_PROP_TYPE_SHAPE = PropTypes.exact({
  term: PropTypes.string,
  description: PropTypes.string,
});

export const PROP_TYPES = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(DEFINITION_PROP_TYPE_SHAPE),
};

export default PROP_TYPES;
