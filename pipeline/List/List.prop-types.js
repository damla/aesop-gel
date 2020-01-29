import PropTypes from 'prop-types';

export const ITEM_PROP_TYPE_SHAPE = PropTypes.exact({
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  id: PropTypes.string,
});

export const PROP_TYPES = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(ITEM_PROP_TYPE_SHAPE).isRequired,
  listItemClassName: PropTypes.string,
};

export default PROP_TYPES;
