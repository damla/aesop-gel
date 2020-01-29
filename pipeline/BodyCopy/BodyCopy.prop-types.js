import PropTypes from 'prop-types';
import { getPropTypeOptionValues } from '~/utils/propTypes';

export const HYPERLINK_PROP_TYPE_SHAPE = PropTypes.object;
export const PARENT_PROP_TYPE_OPTIONS = {
  TEXT_OVER_HERO: 'TextOverHero',
  HALF_WIDTH_FULL_BLEED: 'HalfWidthFullBleed',
};

export const PROP_TYPES = {
  className: PropTypes.string,
  copy: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  cta: HYPERLINK_PROP_TYPE_SHAPE, // @TODO replace with HyperLinkType
  eyebrow: PropTypes.string,
  id: PropTypes.string,
  parent: PropTypes.oneOf(getPropTypeOptionValues(PARENT_PROP_TYPE_OPTIONS)),
  primaryTitle: PropTypes.string,
  quote: PropTypes.string,
  secondaryTitle: PropTypes.string,
};

export default PROP_TYPES;
