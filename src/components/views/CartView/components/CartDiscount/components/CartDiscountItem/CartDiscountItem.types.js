import { ClassSetType } from '~/types';
import { CartPromotion } from '~/types/Cart';

interface CartDiscountItemCopy {
  appliedDiscountLabel: string;
  removeDiscountLabel: string;
  removeDiscountTitle: string;
}

export interface Props extends ClassSetType {
  copy: CartDiscountItemCopy;
  promotion: CartPromotion;
}

export { Props as default }; // eslint-disable-line no-undef
