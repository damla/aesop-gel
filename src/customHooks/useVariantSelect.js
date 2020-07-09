import { useCallback, useState } from 'react';
import find from 'lodash/find';

const useVariantSelect = (variants = []) => {
  const [selectedVariant, updateSelectedVariant] = useState(variants[0]);

  const setSelectedVariant = useCallback(currentSelectedVariant => {
    updateSelectedVariant(currentSelectedVariant);
  }, []);

  const onVariantChange = (event, currentVariants) => {
    event.persist();

    const {
      target: { value },
    } = event;

    const currentSelectedVariant =
      find(currentVariants, { sku: value }) || null;

    setSelectedVariant(currentSelectedVariant);
  };

  return {
    onVariantChange,
    selectedVariant,
    setSelectedVariant,
    variants,
  };
};

export default useVariantSelect;
