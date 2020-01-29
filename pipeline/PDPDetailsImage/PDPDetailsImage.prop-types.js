import PropTypes from 'prop-types';

export const PRODUCT_VARIANT_IMAGE_SIZE_PROP_TYPE_SHAPE = PropTypes.exact({
  viewport: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
});

export const PRODUCT_VARIANT_IMAGE_PROP_TYPE_SHAPE = PropTypes.exact({
  altText: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PRODUCT_VARIANT_IMAGE_SIZE_PROP_TYPE_SHAPE)
    .isRequired,
});

export const PRODUCT_VARIANT_PROP_TYPE_SHAPE = PropTypes.exact({
  sku: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
});

export const PROP_TYPES = {
  classname: PropTypes.string,
  image: PRODUCT_VARIANT_IMAGE_PROP_TYPE_SHAPE,
  variantOptions: PropTypes.arrayOf(PRODUCT_VARIANT_PROP_TYPE_SHAPE),
  id: PropTypes.string,
  onVariantChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default PROP_TYPES;
