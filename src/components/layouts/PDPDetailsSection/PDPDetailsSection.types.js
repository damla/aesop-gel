import { ClassSetType } from '~/types';

interface PDPDetailsSectionCopy {
  label: string;
}

export interface Props extends ClassSetType {
  copy: PDPDetailsSectionCopy;
  field1Description?: string;
  field1Label?: string;
  field2Description?: string;
  field2Label?: string;
  ingredientText?: string;
  keyIngredient?: string;
  name?: string;
  price?: string;
  sku?: string;
}

export { Props as default }; // eslint-disable-line no-undef
