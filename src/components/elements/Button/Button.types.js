import { SyntheticEvent } from 'react';
import { ClassSetType } from '~/types';

export type ButtonType = 'button' | 'reset' | 'submit';

export interface Props extends ClassSetType {
  alternate?: boolean;
  children: string | React.ReactNode;
  dataTestRef?: string | undefined;
  disabled?: boolean;
  hasLightText?: boolean;
  href?: string | undefined;
  icon?: boolean;
  inline?: boolean;
  id?: string | undefined;
  onClick?(event: SyntheticEvent): void | undefined;
  tabIndex?: number | undefined;
  target?: string;
  title: string;
  to?: string | undefined;
  type?: ButtonType | undefined;
}

export interface LinkProps {
  href?: string;
  to?: string;
}

export { Props as default }; // eslint-disable-line no-undef
