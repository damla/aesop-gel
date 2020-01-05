import { InjectPropsType } from '~/components/containers/FormContainer/FormContainer.types';

interface CopyType {
  submitLabel: string;
  submitTitle: string;
}

export interface ComponentProps {
  copy: CopyType;
}

export interface Props extends InjectPropsType {
  props: ComponentProps;
}

export { Props as default }; // eslint-disable-line no-undef
