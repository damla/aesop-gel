import { ClassSetType } from '~/types';

export interface Props extends ClassSetType {
  isLight?: boolean;
  isLoading: boolean;
  small?: boolean;
}

export { Props as default }; // eslint-disable-line no-undef
