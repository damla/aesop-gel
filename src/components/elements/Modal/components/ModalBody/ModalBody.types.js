import { ClassSetType } from '~/types';

interface ModalBodyCopy {
  closeDialog: string;
}

export interface Props extends ClassSetType {
  children: string | React.ReactNode;
  copy: ModalBodyCopy;
  handleClose: () => void;
  isVisible: boolean;
}

export { Props as default }; // eslint-disable-line no-undef
