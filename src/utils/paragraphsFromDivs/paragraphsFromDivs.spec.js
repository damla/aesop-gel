import paragraphsFromDivs from './paragraphsFromDivs';

describe('paragraphsFromDivs()', () => {
  test('Expect to return a string with `div` tags repalced with `p` tags', () => {
    expect(paragraphsFromDivs('<div>foo</div><div>bar</div>')).toEqual(
      '<p>foo</p><p>bar</p>',
    );
  });

  test('Expect a sting to be returned wrapped in a `p` tag if the given string contains no `div` tags to replace', () => {
    expect(paragraphsFromDivs('foo bar')).toEqual('<p>foo bar</p>');
  });
});
