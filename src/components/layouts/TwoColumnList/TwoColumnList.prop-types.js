import PropTypes from 'prop-types';

export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;

export const LIST_PROP_TYPE_SHAPE = PropTypes.exact({
  id: PropTypes.string.isRequired,
  primaryTitle: PropTypes.string,
  subTitle: PropTypes.string,
  subItemLinks: PropTypes.arrayOf(HYPERLINK_PROP_TYPE_SHAPE),
});

export const PROP_TYPES = {
  className: PropTypes.string,
  leftColumn: PropTypes.arrayOf(LIST_PROP_TYPE_SHAPE).isRequired,
  rightColumn: PropTypes.arrayOf(LIST_PROP_TYPE_SHAPE).isRequired,
};
