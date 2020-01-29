import { ClassSetType } from '~/types';

interface CartDiscountDialogCopy {
  heading: string;
}

export interface Props extends ClassSetType {
  copy: CartDiscountDialogCopy;
  handleClose: () => void;
  isVisible: boolean;
}

export { Props as default }; // eslint-disable-line no-undef
