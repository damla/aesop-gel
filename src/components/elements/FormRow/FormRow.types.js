import { ClassSetType } from '~/types';

export interface Props extends ClassSetType {
  children: string | React.ReactNode;
}

export { Props as default }; // eslint-disable-line no-undef
