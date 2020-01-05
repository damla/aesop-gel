export type TransitionType =
  | 'fade'
  | 'shiftInDown'
  | 'shiftInLeft'
  | 'slideDown'
  | 'slideRight'
  | 'slowFade'
  | 'zoom';

export interface Props {
  active?: boolean;
  activeOnMount?: boolean | undefined;
  type: TransitionType;
  mountOnEnter?: boolean | undefined;
  unmountOnExit?: boolean | undefined;
}

export { Props as default }; // eslint-disable-line no-undef
