export const getPrimaryTitleLevel = eyebrow => (eyebrow ? '3' : '2');

export const getSecondaryTitleLevel = (eyebrow, primaryTitle) => {
  if (eyebrow) {
    return primaryTitle ? '4' : '3';
  }
  return primaryTitle ? '3' : '2';
};

export default {
  getPrimaryTitleLevel,
  getSecondaryTitleLevel,
};
