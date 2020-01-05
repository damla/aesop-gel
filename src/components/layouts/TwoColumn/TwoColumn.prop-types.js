import PropTypes from 'prop-types';
import { getPropTypeOptionValues } from '~/utils/propTypes/PropTypes';

export const IMAGE_PROP_TYPE_SHAPE = PropTypes.object;
export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;
export const PARENT_PROP_TYPE_OPTIONS = [
  {
    TEXT_OVER_HERO: 'TextOverHero',
    HALF_WIDTH_FULL_BLEED: 'HalfWidthFullBleed',
  },
];

const BODY_COPY_PROP_TYPE_SHAPE = PropTypes.exact({
  copy: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  cta: HYPERLINK_PROP_TYPE_SHAPE,
  eyebrow: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.oneOf(getPropTypeOptionValues(PARENT_PROP_TYPE_OPTIONS)),
  primaryTitle: PropTypes.string,
  quote: PropTypes.string,
  secondaryTitle: PropTypes.string,
});

export const COLUMN_CONTENT_PROP_TYPE_SHAPE = PropTypes.exact({
  fields: PropTypes.oneOfType([
    BODY_COPY_PROP_TYPE_SHAPE,
    IMAGE_PROP_TYPE_SHAPE,
  ]),
  id: PropTypes.string,
  type: PropTypes.string,
});

export const PROP_TYPES = {
  className: PropTypes.string,
  addExtraVerticalPadding: PropTypes.boolean,
  id: PropTypes.string.isRequired,
  isSidebarRightAligned: PropTypes.boolean,
  main: COLUMN_CONTENT_PROP_TYPE_SHAPE,
  sidebar: COLUMN_CONTENT_PROP_TYPE_SHAPE,
};
