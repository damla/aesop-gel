import { useCallback, useState } from 'react';

const useProductDetail = product => {
  const [productDetail, updateProductDetail] = useState(product);

  const setProductDetail = useCallback(
    ({
      description,
      id,
      variantOptions,
      cartDisclaimer,
      definitionList,
      ingredients,
      keyIngredient,
      productName,
    }) => {
      updateProductDetail({
        description,
        id,
        variantOptions,
        cartDisclaimer,
        definitionList,
        ingredients,
        keyIngredient,
        productName,
      });
    },
    [],
  );

  return {
    productDetail,
    setProductDetail,
  };
};

export default useProductDetail;
