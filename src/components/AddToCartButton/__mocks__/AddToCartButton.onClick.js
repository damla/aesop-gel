/* istanbul ignore file */
export const mockOnClick = async (
  sku,
  addToCartDispatch,
  ADD_TO_CART_ACTION_TYPES,
) => {
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
    console.log('API result from AddToCart:', result); // eslint-disable-line no-console
  } catch (e) {
    addToCartDispatch({ type: ADD_TO_CART_ACTION_TYPES.FAIL });
  }
};

export default mockOnClick;
