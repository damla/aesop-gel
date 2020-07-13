import { useReducer } from 'react';

export const ADD_TO_CART_ACTION_TYPES = {
  FAIL: 'FAIL',
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
};

const initialState = {
  hasError: false,
  isLoading: false,
  isUpdateSuccessful: false,
};

function reducer(state, action) {
  if (action.type === ADD_TO_CART_ACTION_TYPES.FETCHING) {
    return {
      hasError: false,
      isLoading: true,
      isUpdateSuccessful: false,
    };
  } else if (action.type === ADD_TO_CART_ACTION_TYPES.SUCCESS) {
    return {
      hasError: false,
      isLoading: false,
      isUpdateSuccessful: true,
    };
  } else if (action.type === ADD_TO_CART_ACTION_TYPES.FAIL) {
    return {
      hasError: true,
      isLoading: false,
      isUpdateSuccessful: false,
    };
  }

  throw new Error(
    `useAddToCart: Dispatch action type "${action.type}" not found.`,
  );
}

const useAddToCart = onClick => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, hasError, isUpdateSuccessful } = state;

  return {
    actionTypes: ADD_TO_CART_ACTION_TYPES,
    dispatch,
    hasError,
    isLoading,
    isUpdateSuccessful,
    onClick,
  };
};

export default useAddToCart;
