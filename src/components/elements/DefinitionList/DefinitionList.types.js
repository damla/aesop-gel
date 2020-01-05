import React from 'react';
import { ClassSetType } from '~/types';

export interface Definition {
  term: string | React.ReactNode;
  description: string | React.ReactNode;
}

export interface Props extends ClassSetType {
  items: Definition[];
}

export { Props as default }; // eslint-disable-line no-undef
