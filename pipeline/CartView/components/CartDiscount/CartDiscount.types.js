import { ClassSetType } from '~/types';
import { CartPromotion } from '~/types/Cart';

interface CartDiscountCopy {
  applyDiscountLabel: string;
}

export interface Props extends ClassSetType {
  copy: CartDiscountCopy;
  promotions: CartPromotion[];
}

export { Props as default }; // eslint-disable-line no-undef
