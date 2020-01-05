import PropTypes from 'prop-types';

export const VIDEO_PROP_TYPE_SHAPE = PropTypes.object;
export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;

export const PROP_TYPES = {
  className: PropTypes.string,
  copy: PropTypes.string,
  cta: HYPERLINK_PROP_TYPE_SHAPE,
  eyebrow: PropTypes.string,
  hasLightText: PropTypes.boolean,
  id: PropTypes.string,
  noTopMargin: PropTypes.boolean,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  video: VIDEO_PROP_TYPE_SHAPE.isRequired,
};

export default PROP_TYPES;
