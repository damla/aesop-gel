import { useCallback, useState } from 'react';
import find from 'lodash/find';

const useVariantSelect = () => {
  const [selectedVariant, updateSelectedVariant] = useState(null);

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
  };
};

export default useVariantSelect;
