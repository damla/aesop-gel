import { useReducer } from 'react';

export const ADD_TO_CART_ACTION_TYPES = {
  FAIL: 'FAIL',
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
};

const initialState = {
  errorMessage: '',
  hasError: false,
  isLoading: false,
  isUpdateSuccessful: false,
};

function reducer(state, action) {
  if (action.type === ADD_TO_CART_ACTION_TYPES.FETCHING) {
    return {
      errorMessage: '',
      hasError: false,
      isLoading: true,
      isUpdateSuccessful: false,
    };
  } else if (action.type === ADD_TO_CART_ACTION_TYPES.SUCCESS) {
    return {
      errorMessage: '',
      hasError: false,
      isLoading: false,
      isUpdateSuccessful: true,
    };
  } else if (action.type === ADD_TO_CART_ACTION_TYPES.FAIL) {
    return {
      errorMessage: action.payload,
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
