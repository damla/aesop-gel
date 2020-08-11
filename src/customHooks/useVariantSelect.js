import { useCallback, useState } from 'react';
import find from 'lodash/find';

const useVariantSelect = (variantOptions = []) => {
  const [selectedVariant, updateSelectedVariant] = useState(variantOptions[0]);

  const setSelectedVariant = useCallback(currentSelectedVariant => {
    updateSelectedVariant(currentSelectedVariant);
  }, []);

  const onVariantChange = (event, variants) => {
    event.persist();

    const {
      target: { value },
    } = event;

    const currentSelectedVariant = find(variants, { sku: value }) || {};

    setSelectedVariant(currentSelectedVariant);
  };

  return {
    onVariantChange,
    selectedVariant,
    setSelectedVariant,
    variantOptions,
  };
};

export default useVariantSelect;
