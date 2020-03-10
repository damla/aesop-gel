export const getHeadingLevel = eyebrow => (eyebrow ? '3' : '2');

export const getSubHeadingLevel = (eyebrow, heading) => {
  if (eyebrow) {
    return heading ? '4' : '3';
  }

  return heading ? '3' : '2';
};
