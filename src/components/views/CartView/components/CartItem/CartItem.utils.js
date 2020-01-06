import { OptionType } from '~/types/Control.types';

export const getQuantityOptions = (maxQuantity: number): OptionType[] => {
  const options: OptionType[] = [];

  for (let i = 1; i <= maxQuantity; i++) {
    const quantity = String(i);
    options.push({ label: quantity, value: quantity });
  }

  return options;
};
