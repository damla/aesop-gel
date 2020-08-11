import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useLoadMore } from '~/customHooks';

const initialState = {
  actionTypes: {},
  dispatch: () => {},
  hasError: false,
  isLoading: false,
  onClick: () => {},
};

const LoadMoreContext = createContext(initialState);

export const useLoadMoreContext = () => useContext(LoadMoreContext);

export const LoadMoreContextProvider = ({ children, onClick }) => (
  <LoadMoreContext.Provider value={useLoadMore(onClick)}>
    {children}
  </LoadMoreContext.Provider>
);

LoadMoreContextProvider.propTypes = {
  children: PropTypes.any,
  /**
    A callback function that takes `sku<string>`, `LoadMoreDispatch<function>`, `ADD_TO_CART_ACTION_TYPES<array[string]>`
    as arguments. See [LoadMoreButton.onClick.js mock](https://github.com/aesop/aesop-gel/tree/develop/src/components/LoadMoreButton/__mocks__/LoadMoreButton.onClick.js)
    for an example. ___Required___
   */
  onClick: PropTypes.func,
};

export default LoadMoreContextProvider;
