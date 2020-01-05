import { ClassSetType, SubNavType } from '~/types';

export interface Props extends ClassSetType {
  children?: string;
  siteNavigationPrimary: SubNavType;
  siteNavigationSecondary: SubNavType;
  siteNavigationTernary: SubNavType;
}

export { Props as default }; // eslint-disable-line no-undef
