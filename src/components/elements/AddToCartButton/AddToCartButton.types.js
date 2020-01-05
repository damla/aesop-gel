import { ClassSetType } from '~/types';

export interface AddToCartButtonType {
  dataTestRef: string;
  disabled: boolean;
  name?: string;
  price?: string;
  sku?: string;
}

export interface Props extends ClassSetType, AddToCartButtonType {}

export { Props as default }; // eslint-disable-line no-undef
