import PropTypes from 'prop-types';
import { getPropTypeOptionValues } from '~/utils/propTypes';

export const TRANSITION_PROP_TYPE_OPTIONS = {
  FADE: 'fade',
  SHIFT_IN_DOWN: 'shiftInDown',
  SHIFT_IN_LEFT: 'shiftInLeft',
  SLIDE_DOWN: 'slideDown',
  SLIDE_RIGHT: 'slideRight',
  SLOW_FADE: 'slowFade',
  ZOOM: 'zoom',
};

export const PROP_TYPES = {
  active: PropTypes.bool,
  activeOnMount: PropTypes.bool,
  children: PropTypes.node.isRequired,
  mountOnEnter: PropTypes.bool,
  type: PropTypes.oneOf(getPropTypeOptionValues(TRANSITION_PROP_TYPE_OPTIONS))
    .isRequired,
  unmountOnExit: PropTypes.bool,
};

export default PROP_TYPES;
