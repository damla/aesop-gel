import React from 'react';
import { ClassSetType, ImageType } from '~/types';

export interface Props extends ClassSetType {
  copy: {
    description?: string;
    subTitle: string;
    title: string;
  };
  content?: React.ReactNode;
  image: ImageType;
  reverse?: boolean | undefined;
}

export { Props as default }; // eslint-disable-line no-undef
