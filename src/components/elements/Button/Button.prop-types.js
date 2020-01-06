import PropTypes from 'prop-types';
import { getPropTypeOptionValues } from '~/utils/propTypes';

export const BUTTON_TYPE_PROP_TYPE_OPTIONS = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
};

export const LINK_PROP_TYPE_SHAPE = PropTypes.exact({
  href: PropTypes.string,
  to: PropTypes.string,
});

export const PROP_TYPES = {
  alternate: PropTypes.bool,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  disabled: PropTypes.bool,
  hasLightText: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.bool,
  inline: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  type: PropTypes.oneOf(getPropTypeOptionValues(BUTTON_TYPE_PROP_TYPE_OPTIONS)),
};

export default PROP_TYPES;
