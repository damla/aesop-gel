import { BREAKPOINTS } from '~/constants';

export const IS_MOBILE_OR_TABLET = `(max-width: ${BREAKPOINTS.LARGE.MIN_WIDTH}px)`;
export const BREAKPOINT_CONDITIONS = {
  IS_MOBILE_OR_TABLET,
};

const { LARGE, MEDIUM, SMALL } = BREAKPOINTS;

export const CONSTRAINT_KEYS = {
  MIN_WIDTH: 'minWidth',
  VIEWPORT: 'viewport',
};

const constraints = [
  {
    [CONSTRAINT_KEYS.MIN_WIDTH]: SMALL.MIN_WIDTH,
    [CONSTRAINT_KEYS.VIEWPORT]: SMALL.VIEWPORT,
  },
  {
    [CONSTRAINT_KEYS.MIN_WIDTH]: MEDIUM.MIN_WIDTH,
    [CONSTRAINT_KEYS.VIEWPORT]: MEDIUM.VIEWPORT,
  },
  {
    [CONSTRAINT_KEYS.MIN_WIDTH]: LARGE.MIN_WIDTH,
    [CONSTRAINT_KEYS.VIEWPORT]: LARGE.VIEWPORT,
  },
];

const constraintsByViewport = {};
constraints.forEach(constraint => {
  constraintsByViewport[constraint.viewport] = constraint;
});

/**
 * getViewportForWidth
 * @param width: number
 * @return string
 */
export const getViewportForWidth = width => {
  let i = constraints.length - 1;
  while (i >= 0 && width < constraints[i].minWidth) {
    i--;
  }
  return constraints[i].viewport;
};

/**
 * ascertainIsMobileOrTablet
 * @param none
 * @return boolean
 */
export const ascertainIsMobileOrTablet = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_MOBILE_OR_TABLET).matches
    : false;

export default {
  CONSTRAINT_KEYS,
  constraints,
  constraintsByViewport,
  getViewportForWidth,
  ascertainIsMobileOrTablet,
};
