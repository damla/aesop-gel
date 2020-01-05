import { ClassSetType } from '~/types';

export interface Props extends ClassSetType {
  productName: string;
  description: string;
}

export { Props as default }; // eslint-disable-line no-undef
