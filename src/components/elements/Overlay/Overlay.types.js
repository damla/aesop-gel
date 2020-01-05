import { SyntheticEvent } from 'react';
import { ClassSetType } from '~/types';

export interface Props extends ClassSetType {
  handleClose?: (event: SyntheticEvent) => void | undefined;
  isVisible?: boolean;
}

export { Props as default }; // eslint-disable-line no-undef
