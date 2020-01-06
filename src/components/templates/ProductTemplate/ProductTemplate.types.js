import { ClassSetType } from '~/types';
import { Locale } from '~/types/Locale';
import { Product } from '~/types/Product';

export interface Props extends ClassSetType {
  data: {
    aesopLocale: Locale;
    aesopProduct: Product;
  };
}

export { Props as default }; // eslint-disable-line no-undef
