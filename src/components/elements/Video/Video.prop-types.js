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

const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.exact({
  id: PropTypes.string,
  dataTestRef: PropTypes.string,
  openInANewWindow: PropTypes.oneOf(
    getPropTypeOptionValues(HYPERLINK_STYLE_TYPE_TYPE_OPTIONS),
  ),
  style: PropTypes.CtaStylesType,
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(
    getPropTypeOptionValues(HYPERLINK_TARGET_PROP_TYPE_OPTIONS),
  ),
  url: PropTypes.string.isRequired,
});

export const IMAGE_PROP_TYPE_SHAPE = PropTypes.exact({
  className: PropTypes.string,
  altText: PropTypes.string.isRequired,
  cta: HYPERLINK_PROP_TYPE_SHAPE,
  fullBleedImage: PropTypes.bool,
  id: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
  type: PropTypes.string,
});

export const PROP_TYPES = {
  autoplay: PropTypes.bool.isRequired,
  className: PropTypes.string,
  fallbackImage: IMAGE_PROP_TYPE_SHAPE,
  id: PropTypes.string.isRequired,
  large: PropTypes.string,
  loop: PropTypes.bool.isRequired,
  medium: PropTypes.string,
  poster: IMAGE_PROP_TYPE_SHAPE,
  small: PropTypes.string,
  playInFullScreen: PropTypes.bool,
};

export default PROP_TYPES;
