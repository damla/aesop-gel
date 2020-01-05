import PropTypes from 'prop-types';
import { getPropTypeOptionValues } from '~/utils/propTypes/PropTypes';

export const POSITION_PROP_TYPE_OPTIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
};

export const THEME_PROP_TYPE_OPTIONS = {
  DARK: 'dark',
  BLACK: 'black',
};

export const PROP_TYPES = {
  className: PropTypes.string,
  cta: PropTypes.object, // @TODO make hyperlink proptype
  handleClose: PropTypes.func.isRequired,
  isVisible: PropTypes.boolean,
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf(
    getPropTypeOptionValues(POSITION_PROP_TYPE_OPTIONS),
  ),
  showCloseButton: PropTypes.boolean,
  theme: PropTypes.oneOf(getPropTypeOptionValues(THEME_PROP_TYPE_OPTIONS)),
  title: PropTypes.string.isRequired,
};

export default PROP_TYPES;
