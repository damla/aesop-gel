import PropTypes from 'prop-types';

export const IMAGE_PROP_TYPE_SHAPE = PropTypes.object;
export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;

export const PRODUCT_DETAILS_PROP_TYPE_SHAPE = PropTypes.exact({
  name: PropTypes.string.isRequired,
  priceDetails: PropTypes.string.isRequired,
});

export const PROP_TYPES = {
  classname: PropTypes.string,
  hyperlink: HYPERLINK_PROP_TYPE_SHAPE,
  image: IMAGE_PROP_TYPE_SHAPE.isRequired,
  productDetails: PRODUCT_DETAILS_PROP_TYPE_SHAPE.isRequired,
};

export default PROP_TYPES;
