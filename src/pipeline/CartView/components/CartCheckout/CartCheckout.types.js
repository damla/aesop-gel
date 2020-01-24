import { ClassSetType } from '~/types';

interface CartCheckoutCopy {
  checkoutButton: string;
  checkoutButtonTitle: string;
  subTotal: string;
}

export interface Props extends ClassSetType {
  copy: CartCheckoutCopy;
  subTotalPrice: string;
}

export { Props as default }; // eslint-disable-line no-undef
