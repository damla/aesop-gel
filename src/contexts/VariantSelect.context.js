import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import useVariantSelect from '~/customHooks/useVariantSelect';

const defaultValues = {
  onVariantChange: () => {},
  selectedVariant: null,
  setSelectedVariant: () => {},
  variantOptions: [],
};

const VariantSelectContext = createContext(defaultValues);

export const VariantSelectContextProvider = ({ children, variants }) => (
  <VariantSelectContext.Provider value={useVariantSelect(variants)}>
    {children}
  </VariantSelectContext.Provider>
);

VariantSelectContextProvider.propTypes = {
  children: PropTypes.any,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.shape({
        altText: PropTypes.string,
        sizes: PropTypes.shape({
          large: PropTypes.string,
          medium: PropTypes.string,
          small: PropTypes.string,
        }),
      }),
    }),
  ),
};

export const useVariantSelectContext = () => useContext(VariantSelectContext);

export default {
  VariantSelectContextProvider,
  useVariantSelectContext,
};
