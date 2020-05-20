import { createContext, useContext } from 'react';

const defaultValues = {
  description: '',
  id: '',
  variantOptions: [],
  cartDisclaimer: '',
  definitionList: [],
  ingredients: '',
  keyIngredient: '',
  productName: '',
};

const ProductDetailContext = createContext(defaultValues);

export const ProductDetailContextProvider = ProductDetailContext.Provider;

export const useProductDetailContext = () => useContext(ProductDetailContext);

export default {
  ProductDetailContextProvider,
  useProductDetailContext,
};
