import PropTypes from 'prop-types';

const LOCALE_PROP_TYPE_SHAPE = {};
const PRODUCT_PROP_TYPE_SHAPE = {};

export const PROP_TYPES = {
  className: PropTypes.string,
  data: PropTypes.exact({
    aesopLocale: LOCALE_PROP_TYPE_SHAPE,
    aesopProduct: PRODUCT_PROP_TYPE_SHAPE,
  }),
};

export default PROP_TYPES;
