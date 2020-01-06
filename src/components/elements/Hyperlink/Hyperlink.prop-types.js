import PropTypes from 'prop-types';
import { getPropTypeOptionValues } from '~/utils/propTypes';

export const HYPERLINK_TARGET_PROP_TYPE_OPTIONS = {
  RELATIVE: 'Relative',
  ABSOLUTE: 'Absolute',
};

export const HYPERLINK_STYLE_TYPE_TYPE_OPTIONS = {
  EXTERNAL_BUTTON_LINK: 'External Button Link',
  EXTERNAL_TEXT_LINK: 'External Text Link',
  INTERNAL_BUTTON_LINK: 'Internal Button Link',
  INTERNAL_TEXT_LINK: 'Internal Text Link',
  EXTERNAL_NO_ICON_LINK: 'External No Icon Link',
  NO_ICON_LINK: 'No Icon Link',
};

export const PROP_TYPES = {
  className: PropTypes.string,
  id: PropTypes.string,
  dataTestRef: PropTypes.string,
  openInANewWindow: PropTypes.bool,
  style: PropTypes.oneOf(
    getPropTypeOptionValues(HYPERLINK_STYLE_TYPE_TYPE_OPTIONS),
  ),
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(
    getPropTypeOptionValues(HYPERLINK_TARGET_PROP_TYPE_OPTIONS),
  ),
  url: PropTypes.string.isRequired,
};

export default PROP_TYPES;
