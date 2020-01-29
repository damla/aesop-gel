import React from 'react';
import { ClassSetType, FigureType, ImageType } from '~/types';

export interface Props extends ClassSetType {
  id?: string | undefined;
  left: React.ReactElement<FigureType> | React.ReactElement<ImageType>;
  right: React.ReactElement<FigureType> | React.ReactElement<ImageType>;
}

export { Props as default }; // eslint-disable-line no-undef
