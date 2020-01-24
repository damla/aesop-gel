import { ClassSetType } from '~/types';

interface CartDiscountFormCopy {
  inputLabel: string;
  submitLabel: string;
  submitTitle: string;
}

export interface Props extends ClassSetType {
  copy: CartDiscountFormCopy;
  onCompleted: () => void;
}

export { Props as default }; // eslint-disable-line no-undef
