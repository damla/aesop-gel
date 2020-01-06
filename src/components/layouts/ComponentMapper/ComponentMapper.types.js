import { BodyCopy, ImageType } from '~/types';

export interface Props {
  componentType: string;
  fields?: BodyCopy | ImageType | object;
  id: string;
}

export { Props as default }; // eslint-disable-line no-undef
