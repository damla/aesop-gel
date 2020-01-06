import { ClassSetType } from '~/types';

interface CartItemCopy {
  remove: string;
}

export interface Props extends ClassSetType {
  copy: CartItemCopy;
  entryNumber: number;
  maxQuantity: number;
  name: string;
  price: string;
  quantity: number;
  size: string;
  url: string;
}

export { Props as default }; // eslint-disable-line no-undef
