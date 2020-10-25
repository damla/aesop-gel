import { useCallback, useEffect, useState } from 'react';

const useProductDetail = product => {
  const [productDetail, updateProductDetail] = useState(product);

  const setProductDetail = useCallback(
    ({
      cartDisclaimer,
      definitionList,
      description,
      id,
      image,
      ingredients,
      keyIngredient,
      productName,
      upSellProduct,
      variantOptions,
    }) => {
      updateProductDetail({
        cartDisclaimer,
        definitionList,
        description,
        id,
        image,
        ingredients,
        keyIngredient,
        productName,
        upSellProduct,
        variantOptions,
      });
    },
    [],
  );

  useEffect(() => {
    setProductDetail(product);
  }, [product, setProductDetail]);

  return {
    productDetail,
    setProductDetail,
  };
};

export default useProductDetail;
