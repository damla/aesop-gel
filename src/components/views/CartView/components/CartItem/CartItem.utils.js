export const getQuantityOptions = maxQuantity => {
  const options = [];

  for (let i = 1; i <= maxQuantity; i++) {
    const quantity = String(i);
    options.push({ label: quantity, value: quantity });
  }

  return options;
};
