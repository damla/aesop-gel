/**
 * getImageSource
 * @param viewport string
 * @param sizes [{ src: string, viewport: string } ]
 * @return string || null
 */
export const getImageSource = (viewport, sizes) => {
  const viewportRegex = new RegExp(viewport, 'i');
  const viewportImage = sizes.find(size => viewportRegex.test(size.viewport));

  if (!viewportImage) {
    return null;
  }

  return `${process.env.GATSBY_MEDIA || ''}${viewportImage.src}`;
};

export default {
  getImageSource,
};
