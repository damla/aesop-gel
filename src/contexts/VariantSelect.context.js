import { createContext, useContext } from 'react';

const defaultValues = {
  onVariantChange: () => {},
  selectedVariant: {},
  setSelectedVariant: () => {},
};

const VariantSelectContext = createContext(defaultValues);

export const VariantSelectContextProvider = VariantSelectContext.Provider;

export const useVariantSelectContext = () => useContext(VariantSelectContext);

export default {
  VariantSelectContextProvider,
  useVariantSelectContext,
};
