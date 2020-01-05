import { ClassSetType } from '~/types';

export interface Props extends ClassSetType {
  handleOnCartClick: () => void;
}

export { Props as default }; // eslint-disable-line no-undef
