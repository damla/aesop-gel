import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useProductDetail } from '~/customHooks';

const defaultValues = {
  productDetail: {
    description: '',
    id: '',
    variantOptions: [],
    cartDisclaimer: '',
    definitionList: [],
    ingredients: '',
    keyIngredient: '',
    productName: '',
  },
};

const ProductDetailContext = createContext(defaultValues);

export const ProductDetailContextProvider = ({ children, product }) => (
  <ProductDetailContext.Provider value={useProductDetail(product)}>
    {children}
  </ProductDetailContext.Provider>
);

ProductDetailContextProvider.propTypes = {
  children: PropTypes.any,
  product: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    variantOptions: PropTypes.array,
    cartDisclaimer: PropTypes.string,
    definitionList: PropTypes.arrayOf(
      PropTypes.shape({
        term: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    ingredients: PropTypes.string,
    keyIngredient: PropTypes.string,
    productName: PropTypes.string.isRequired,
  }),
};

export const useProductDetailContext = () => useContext(ProductDetailContext);

export default {
  ProductDetailContextProvider,
  useProductDetailContext,
};
