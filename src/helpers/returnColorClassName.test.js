import returnColorClassName from './returnColorClassName';

describe('The function returns class name depending on the string', () => {
  test('red should be returned', () => {
    const input = '-14.1';

    const actual = returnColorClassName(input);

    const expected = 'red';

    expect(actual).toBe(expected);
  });

  test('green should be returned', () => {
    const input = '14.1';

    const actual = returnColorClassName(input);

    const expected = 'green';

    expect(actual).toBe(expected);
  });

  test('empty should be returned', () => {
    const input = '?';

    const actual = returnColorClassName(input);

    const expected = '';

    expect(actual).toBe(expected);
  });
});
