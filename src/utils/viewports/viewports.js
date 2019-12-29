import { BREAKPOINTS } from '~/constants';

const { LARGE, MEDIUM, SMALL } = BREAKPOINTS;
const CONSTRAINT_KEYS = {
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
 * @param width: number
 * @return string
 */
const getViewportForWidth = width => {
  let i = constraints.length - 1;
  while (i >= 0 && width < constraints[i].minWidth) {
    i--;
  }
  return constraints[i].viewport;
};

export {
  CONSTRAINT_KEYS,
  constraints,
  constraintsByViewport,
  getViewportForWidth,
};
