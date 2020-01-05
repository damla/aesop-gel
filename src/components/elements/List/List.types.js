import { ClassSetType } from '~/types';

interface ItemType {
  content: string | React.ReactNode;
  id?: string | undefined;
}

export interface Props extends ClassSetType {
  items: ItemType[];
  listItemClassSet?: string | undefined;
}

export { Props as default }; // eslint-disable-line no-undef
