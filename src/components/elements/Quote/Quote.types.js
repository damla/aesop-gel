import { ClassSetType } from '~/types';

export interface Props extends ClassSetType {
  author: string;
  children: string;
  noTopPadding?: boolean;
}

export { Props as default }; // eslint-disable-line no-undef
