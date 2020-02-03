import PropTypes from 'prop-types';
import { getPropTypeOptionValues } from '~/utils/propTypes';

export const LEVEL_PROP_TYPE_OPTIONS = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
};

export const SIZE_PROP_TYPE_OPTIONS = {
  XSMALL: 'xSmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xLarge',
};

export const HEADING_PROP_TYPES = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  level: PropTypes.oneOf(getPropTypeOptionValues(LEVEL_PROP_TYPE_OPTIONS))
    .isRequired,
  noMargin: PropTypes.bool,
  noTopMargin: PropTypes.bool,
  size: PropTypes.oneOf(getPropTypeOptionValues(SIZE_PROP_TYPE_OPTIONS))
    .isRequired,
  useSerifFont: PropTypes.bool,
};

export default HEADING_PROP_TYPES;
