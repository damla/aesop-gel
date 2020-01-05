interface Size {
  src: string;
  viewport: string;
}

export const imageSource = (
  viewport: string,
  sizes: Size[],
): string | undefined => {
  const viewportRegex = new RegExp(viewport, 'i');
  const viewportImage = sizes.find(size => viewportRegex.test(size.viewport));

  if (!viewportImage) {
    return undefined;
  }

  return `${process.env.GATSBY_MEDIA || ''}${viewportImage.src}`;
};

export default {
  imageSource,
};
