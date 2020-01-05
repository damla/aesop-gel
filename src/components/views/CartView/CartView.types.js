import React from 'react';
import { ClassSetType } from '~/types';

export interface Product {
  code: string;
  name: string;
  size: string;
  url: string;
  __typename: string;
}

interface Price {
  formattedValue: string;
  __typename: string;
}

export interface ProductEntry {
  basePrice: Price;
  entryNumber: number;
  maxQuantity: number;
  product: Product;
  quantity: number;
  totalPrice: Price;
  __typename: string;
}

interface CartViewCopy {
  shippingInformation: string | React.ReactNode | undefined;
  paymentInformation: string | React.ReactNode | undefined;
}

export interface Props extends ClassSetType {
  copy: CartViewCopy;
  handleOnClose: () => void;
  isVisible?: boolean;
}

export { Props as default }; // eslint-disable-line no-undef
