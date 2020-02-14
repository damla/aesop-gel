export const paragraphsFromDivs = original => {
  const result = original
    .replace('<div>&nbsp;</div>', '')
    .replace(new RegExp('<div>', 'gi'), '<p>')
    .replace(new RegExp('</div>', 'gi'), '</p>');

  if (result.indexOf('<p>') === -1) {
    return `<p>${result}</p>`;
  }

  return result;
};

export default { paragraphsFromDivs };
