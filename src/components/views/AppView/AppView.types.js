import { SyntheticEvent } from 'react';

import { ImageType } from '~/types';

export interface Handlers {
  onClick(event: SyntheticEvent): void;
}

interface PhilosophyBodyCopy {
  copy?: string;
}

export interface Data {
  image: ImageType;
  component: object;
  philosophyPage: object;
  twoColumn: TwoColumn;
  visit: object;
  philosophyBodyCopy: PhilosophyBodyCopy;
}

export interface State {
  data: Data;
}

export interface TwoColumn {
  id: string;
  main: ContentType;
  sidebar: ContentType;
}

export interface ContentType {
  fields: object;
  sys: object;
}

export interface Props {
  handlers: Handlers;
  data: Data;
}

export { Props as default }; // eslint-disable-line no-undef
