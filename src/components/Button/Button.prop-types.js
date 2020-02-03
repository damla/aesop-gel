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
  handleClick: PropTypes.func,
  hasLightText: PropTypes.bool,
  inline: PropTypes.bool,
  id: PropTypes.string,
  tabIndex: PropTypes.number,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(getPropTypeOptionValues(BUTTON_TYPE_PROP_TYPE_OPTIONS)),
};

export default PROP_TYPES;
