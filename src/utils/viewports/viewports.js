import { BREAKPOINTS } from '~/constants';

export const IS_VIEWPORT_SMALL_ONLY = `(max-width: ${BREAKPOINTS.SMALL.MAX_WIDTH}px)`;
export const IS_VIEWPORT_MEDIUM = `(min-width: ${BREAKPOINTS.MEDIUM.MIN_WIDTH}px)`;
export const IS_VIEWPORT_MEDIUM_ONLY = `(min-width: ${BREAKPOINTS.MEDIUM.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.MEDIUM.MAX_WIDTH}px)`;
export const IS_VIEWPORT_SMALL_MEDIUM_ONLY = `(max-width: ${BREAKPOINTS.MEDIUM.MAX_WIDTH}px)`;
export const IS_VIEWPORT_LARGE = `(min-width: ${BREAKPOINTS.LARGE.MIN_WIDTH}px)`;
export const IS_VIEWPORT_LARGE_ONLY = `(min-width: ${BREAKPOINTS.LARGE.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.LARGE.MAX_WIDTH}px)`;
export const IS_VIEWPORT_XLARGE = `(min-width: ${BREAKPOINTS.XLARGE.MIN_WIDTH}px)`;
export const IS_VIEWPORT_XLARGE_ONLY = `(min-width: ${BREAKPOINTS.XLARGE.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.XLARGE.MAX_WIDTH}px)`;
export const IS_VIEWPORT_LARGE_XLARGE_ONLY = `(min-width: ${BREAKPOINTS.LARGE.MIN_WIDTH}px) and (max-width: ${BREAKPOINTS.XLARGE.MAX_WIDTH}px)`;
export const IS_VIEWPORT_SMALL_TO_XLARGE_ONLY = `(max-width: ${BREAKPOINTS.XLARGE.MAX_WIDTH}px)`;
export const IS_VIEWPORT_XXLARGE = `(min-width: ${BREAKPOINTS.XXLARGE.MIN_WIDTH}px)`;

export const BREAKPOINT_CONDITIONS = {
  IS_VIEWPORT_SMALL_ONLY,
  IS_VIEWPORT_MEDIUM,
  IS_VIEWPORT_MEDIUM_ONLY,
  IS_VIEWPORT_SMALL_MEDIUM_ONLY,
  IS_VIEWPORT_LARGE,
  IS_VIEWPORT_LARGE_ONLY,
  IS_VIEWPORT_XLARGE,
  IS_VIEWPORT_XLARGE_ONLY,
  IS_VIEWPORT_SMALL_TO_XLARGE_ONLY,
  IS_VIEWPORT_XXLARGE,
};

const { LARGE, MEDIUM, SMALL } = BREAKPOINTS;

export const CONSTRAINT_KEYS = {
  MIN_WIDTH: 'minWidth',
  VIEWPORT: 'viewport',
};

export const constraints = [
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

export const constraintsByViewport = {};
constraints.forEach(constraint => {
  constraintsByViewport[constraint.viewport] = constraint;
});

export const getViewportForWidth = width => {
  let i = constraints.length - 1;
  while (i >= 0 && width < constraints[i].minWidth) {
    i--;
  }
  return constraints[i].viewport;
};

export const ascertainIsSmallOnlyViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_SMALL_ONLY).matches
    : false;

export const ascertainIsSmallOrMediumOnlyViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_SMALL_MEDIUM_ONLY).matches
    : false;

export const ascertainIsMediumViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_MEDIUM).matches
    : false;

export const ascertainIsMediumOnlyViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_MEDIUM_ONLY).matches
    : false;

export const ascertainIsLargeViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_LARGE).matches
    : false;

export const ascertainIsLargeOnlyViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_LARGE_ONLY).matches
    : false;

export const ascertainIsLargeOrXLargeOnlyViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_LARGE_XLARGE_ONLY).matches
    : false;

export const ascertainIsXLargeViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_XLARGE).matches
    : false;

export const ascertainIsSmallToXLargeViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_SMALL_TO_XLARGE_ONLY).matches
    : false;

export const ascertainIsXLargeOnlyViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_XLARGE_ONLY).matches
    : false;

export const ascertainIsXXLargeViewport = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(IS_VIEWPORT_XXLARGE).matches
    : false;

export default {
  CONSTRAINT_KEYS,
  constraints,
  constraintsByViewport,
  getViewportForWidth,
  ascertainIsSmallOnlyViewport,
  ascertainIsSmallOrMediumOnlyViewport,
  ascertainIsMediumViewport,
  ascertainIsMediumOnlyViewport,
  ascertainIsLargeViewport,
  ascertainIsLargeOnlyViewport,
  ascertainIsLargeOrXLargeOnlyViewport,
  ascertainIsXLargeViewport,
  ascertainIsSmallToXLargeViewport,
  ascertainIsXLargeOnlyViewport,
  ascertainIsXXLargeViewport,
};
