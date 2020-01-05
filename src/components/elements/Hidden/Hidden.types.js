import React from 'react';
import { ClassSetType } from '~/types';

export interface Props extends ClassSetType {
  children: React.ReactNode | React.ReactElement | React.Component | undefined;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  visuallyHidden?: boolean;
  xLarge?: boolean;
}

export { Props as default }; // eslint-disable-line no-undef
