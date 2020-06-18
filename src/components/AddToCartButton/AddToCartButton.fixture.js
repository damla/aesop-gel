export default {
  className: '',
  copy: {
    cartAction: 'Add to your cart',
    updateNotification: 'added to your cart',
    outOfStock: {
      label: 'Out of Stock',
      title: 'Out of stock',
    },
  },
  dataTestRef: 'DATA_TEST_REF',
  isEnabled: true,
  isFullWidth: true,
  productName: 'Lorem ipsum dolor',
  theme: 'dark',
  mockOnClick: async (sku, addToCartDispatch, ADD_TO_CART_ACTION_TYPES) => {
    addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.FETCHING });
    try {
      const result = await (() =>
        new Promise((resolve, reject) => {
          setTimeout(
            () =>
              sku
                ? resolve(`${sku} was successfully added to the cart.`)
                : reject('fail'),
            3000,
          );
        }))();
      addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.SUCCESS });
      console.log('API result from AddToCart:', result);
    } catch (e) {
      addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.FAIL });
    }
  },
};
