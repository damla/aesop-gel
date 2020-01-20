import PropTypes from 'prop-types';

export const PRODUCT_PROP_TYPE_SHAPE = PropTypes.exact({
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const PRICE_PROP_TYPE_SHAPE = PropTypes.exact({
  formattedValue: PropTypes.string.isRequired,
});

export const PRODUCT_ENTRY_PROP_TYPE_SHAPE = PropTypes.exact({
  basePrice: PRICE_PROP_TYPE_SHAPE.isRequired,
  entryNumber: PropTypes.number.isRequired,
  maxQuantity: PropTypes.number.isRequired,
  product: PRICE_PROP_TYPE_SHAPE.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PRICE_PROP_TYPE_SHAPE.isRequired,
});

const CART_VIEW_COPY_PROP_TYPE_SHAPE = PropTypes.exact({
  shippingInformation: PropTypes.any.isRequired,
  paymentInformation: PropTypes.any.isRequired,
});

const PROP_TYPES = {
  className: PropTypes.string.isRequired,
  copy: CART_VIEW_COPY_PROP_TYPE_SHAPE.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  isVisible: PropTypes.boolean,
};

export default PROP_TYPES;
