import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import useAddToCart from '~/customHooks/useAddToCart';

const initialState = {
  actionTypes: {},
  dispatch: () => {},
  errorMessage: '',
  hasError: false,
  isLoading: false,
  isUpdateSuccessful: false,
  onClick: () => {},
};

const AddToCartContext = createContext(initialState);

export const useAddToCartContext = () => useContext(AddToCartContext);

export const AddToCartContextProvider = ({ children, onClick }) => (
  <AddToCartContext.Provider value={useAddToCart(onClick)}>
    {children}
  </AddToCartContext.Provider>
);

AddToCartContextProvider.propTypes = {
  children: PropTypes.any,
  /**
    A callback function that takes `sku<string>`, `addToCartDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [AddToCartButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/AddToCartButton/__mocks__/AddToCartButton.onClick.js)
    for an example. ___Required___
   */
  onClick: PropTypes.func,
};

export default AddToCartContextProvider;
