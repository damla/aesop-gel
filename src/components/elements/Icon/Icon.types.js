import { AttributeType, ClassSetType } from '~/types';

export interface Props extends AttributeType, ClassSetType {
  dataRef?: string;
  height?: number | undefined;
  isActive?: boolean | undefined;
  name: string;
  title?: string | undefined;
  width?: number | undefined;
}

export interface Svg {
  name: string;
  data: object[];
  viewBox: string;
}

export { Props as default }; // eslint-disable-line no-undef
