import { createContext, useContext } from 'react';

const defaultValues = {
  handleOnClick: () => {},
  isLoading: false,
  isUpdateSuccessful: false,
};

const AddToCartContext = createContext(defaultValues);

export const AddToCartContextProvider = AddToCartContext.Provider;

export const useAddToCartContext = () => useContext(AddToCartContext);

export default AddToCartContext;
