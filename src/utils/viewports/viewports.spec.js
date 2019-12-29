import { constraints, getViewportForWidth, CONSTRAINT_KEYS } from './viewports';
import { BREAKPOINTS } from '~/constants';

const { LARGE, MEDIUM, SMALL } = BREAKPOINTS;

describe('viewports()', () => {
  test('Expect constraint objects to be the correct shape', () => {
    constraints.forEach(constraint => {
      expect(Object.keys(constraint).sort()).toEqual(
        Object.values(CONSTRAINT_KEYS).sort(),
      );
    });
  });

  test('Expect getViewportForWidth to return correct viewport', () => {
    expect(getViewportForWidth(SMALL.MIN_WIDTH)).toEqual(SMALL.VIEWPORT);
    expect(getViewportForWidth(500)).toEqual(SMALL.VIEWPORT);
    expect(getViewportForWidth(MEDIUM.MIN_WIDTH)).toEqual(MEDIUM.VIEWPORT);
    expect(getViewportForWidth(800)).toEqual(MEDIUM.VIEWPORT);
    expect(getViewportForWidth(LARGE.MIN_WIDTH)).toEqual(LARGE.VIEWPORT);
    expect(getViewportForWidth(1200)).toEqual(LARGE.VIEWPORT);
  });
});
