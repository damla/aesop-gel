import PropTypes from 'prop-types';

export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;

export const SUB_NAV_PROP_TYPE_SHAPE = PropTypes.exact({
  links: PropTypes.arrayOf(HYPERLINK_PROP_TYPE_SHAPE).isRequred,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
});

export const PROP_TYPES = {
  className: PropTypes.string,
  siteNavigationPrimary: SUB_NAV_PROP_TYPE_SHAPE.isRequred,
  siteNavigationSecondary: SUB_NAV_PROP_TYPE_SHAPE.isRequred,
  siteNavigationTernary: SUB_NAV_PROP_TYPE_SHAPE.isRequred,
};

export default PROP_TYPES;
