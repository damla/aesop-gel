import { InjectPropsType } from '~/components/containers/FormContainer/FormContainer.types';
import { ClassSetType } from '~/types';

interface CopyType {
  submitTitle: string;
  description: string;
}

export interface ComponentProps extends ClassSetType {
  copy: CopyType;
}

export interface Props extends InjectPropsType {
  props: ComponentProps;
}

export { Props as default }; // eslint-disable-line no-undef
