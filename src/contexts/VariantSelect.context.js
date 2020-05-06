import React from 'react';

const VariantSelectContext = React.createContext({
  onVariantChange: () => {},
  selectedVariant: undefined,
  setSelectedVariant: undefined,
  value: undefined,
});

export default VariantSelectContext;
