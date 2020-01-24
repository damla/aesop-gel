import { ClassSetType } from '~/types';

interface CartHeaderCopy {
  closeCart: string;
}

export interface Props extends ClassSetType {
  copy: CartHeaderCopy;
  dataTestRef?: string | undefined;
  handleOnClose: () => void;
}

export { Props as default }; // eslint-disable-line no-undef
