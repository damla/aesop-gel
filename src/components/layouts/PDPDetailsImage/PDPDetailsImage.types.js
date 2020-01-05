import { ChangeEvent } from 'react';
import { ClassSetType } from '~/types';
import { ProductVariantImage } from '~/types/Product';

interface VariantOptions {
  sku: string;
  size: string | undefined;
}

export interface Props extends ClassSetType {
  image?: ProductVariantImage | undefined;
  variantOptions: VariantOptions[];
  id?: string | undefined;
  onVariantChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

export { Props as default }; // eslint-disable-line no-undef
